import { readDir, readTextFile } from '@tauri-apps/plugin-fs';
import { join } from '@tauri-apps/api/path';
import { useMO2FolderEditor } from '@/state';

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

export const initCategories: (mo2Dir: string) => Promise<void> = async (mo2Dir: string) => {
  const setCategories = useMO2FolderEditor.getState().setCategories;
  try {
    const categories = (await readTextFile(await join(mo2Dir, 'categories.dat')))
      .split('\n')
      .map(category => {
        const catSplit = category.split('|');
        return catSplit.length < 3 ? null : { id: catSplit[0], name: catSplit[1] };
      })
      .filter(category => category !== null);
    setCategories(arrayToObject(categories, 'id'));
  } catch (error) {
    console.error(error);
    throw new Error('Could not read categories.dat');
  }
};

export const initProfiles: (mo2Dir: string) => Promise<void> = async (mo2Dir: string) => {
  const setProfiles = useMO2FolderEditor.getState().setProfiles;
  try {
    const profiles = (await readDir(await join(mo2Dir, 'profiles'))).filter(profileObj => profileObj.isDirectory).map(profile => profile.name);
    setProfiles(profiles);
  } catch (error) {
    console.error(error);
    throw new Error('Could not read profiles directory');
  }
};
