import { DirEntry, readDir, readTextFile } from '@tauri-apps/plugin-fs';
import { join } from '@tauri-apps/api/path';
import { IMO2Category } from '@/types';

/**
 * Transforms an array of objects into an object of objects keyed by the
 * value of the given key.
 *
 * @param array The array of objects to transform.
 * @param key The key to use as the key for the resulting object.
 */
export function arrayToObject<T>(array: T[], key: keyof T): Record<string, T> {
  return array.reduce(
    (acc, item) => {
      const keyValue = String(item[key]);
      acc[keyValue] = item;
      return acc;
    },
    {} as Record<string, T>,
  );
}

export const filesToIgnore = new Set<string>(['.DS_Store']);

/**
 * Filters out files that are in the `filesToIgnore` set from the given list of files.
 *
 * @param files An array of files, either as strings or `DirEntry` objects.
 * @returns A new array containing only the files not present in the `filesToIgnore` set.
 */
export function removeFilesToIgnore<T extends string | DirEntry>(files: T[]): T[] {
  return files.filter(file => {
    if (typeof file === 'string') {
      return !filesToIgnore.has(file);
    } else {
      return !filesToIgnore.has(file.name);
    }
  });
}

/**
 * Reads the categories.dat file and returns an array of category objects
 * @param mo2Dir The directory of the MO2 install
 * @returns An array of category objects, or an error if the file can't be read
 */
export const getAllCategories: (mo2Dir: string) => Promise<IMO2Category[]> = async (mo2Dir: string) => {
  try {
    return (await readTextFile(await join(mo2Dir, 'categories.dat')))
      .split('\n')
      .map(category => {
        const catSplit = category.split('|');
        return catSplit.length < 3 ? null : { id: catSplit[0], name: catSplit[1] };
      })
      .filter(category => category !== null);
  } catch (error) {
    console.error(error);
    throw new Error('Could not read categories.dat');
  }
};

/**
 * Returns a list of all mod profiles in the given MO2 directory.
 *
 * @param mo2Dir The directory of the MO2 install.
 * @returns A list of profile names.
 * @throws If the directory does not exist or is not accessible.
 */
export const getAllProfiles: (mo2Dir: string) => Promise<string[]> = async (mo2Dir: string) => {
  try {
    return (await readDir(await join(mo2Dir, 'profiles'))).filter(profileObj => profileObj.isDirectory).map(profile => profile.name);
  } catch (error) {
    console.error(error);
    throw new Error('Could not read profiles directory');
  }
};

export const getMods: (mo2Dir: string) => Promise<Record<string, IModInfo>> = async (mo2Dir: string) => {
  try {
    const modsFolderPath = await join(mo2Dir, 'mods');
    const modsFolderContent = removeFilesToIgnore(await readDir(modsFolderPath));
    const modPromises: Promise<IModInfo>[] = modsFolderContent
      .filter(modFolder => modFolder.isDirectory)
      .map(async modFolder => {
        const modFolderPath = await join(modsFolderPath, modFolder.name);
        const modDirContent = await readDir(modFolderPath);
        const metaText = await readTextFile(await join(modFolderPath, 'meta.ini'));

        const metaData = metaText.split('\n').reduce(
          (acc, line) => {
            if (!line) return acc;

            const [key, value] = line.split('=');

            if (value === undefined || typeof value !== 'string') return acc;

            acc[key] = value;
            return acc;
          },
          {} as Record<string, string>,
        );

        const modInfo: IModInfo = {
          name: modFolder.name,
          files: modDirContent,
          categories: categoryMetaToId(metaData.category),
          version: metaData.version?.trim(),
          espList: modDirContent.map(file => file.name).filter(file => file.endsWith('.esp')),
        };

        return modInfo;
      });
    return await Promise.all(modPromises).then(mods => arrayToObject(mods, 'name'));
  } catch (error) {
    console.error(error);
    throw new Error('Could not read mods directory');
  }
};

const categoryMetaToId: (catString: string) => string[] = catString => catString?.trim()?.replace(/["\\]/g, '')?.split(',')?.filter(Boolean) || ['-1'];

interface IModInfo {
  name: string;
  files: DirEntry[];
  categories: string[];
  espList: string[];
  version?: string;
}
