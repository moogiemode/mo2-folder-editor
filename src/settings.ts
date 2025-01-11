import { load } from '@tauri-apps/plugin-store';
import { IAppSettings } from './types';
import { AppState, useMO2FolderEditor } from '@/state';
import { arrayToObject, getAllCategories, getAllProfiles, getMods } from '@/components/utils';

const settings = await load('settings.json', { autoSave: false });

export async function getSavedSetting<K extends keyof IAppSettings>(key: K): Promise<IAppSettings[K] | null> {
  return (await settings.get(key)) || null;
}

export const loadSavedAppSettings: () => Promise<void> = async () => {
  const setStateFromSettings = useMO2FolderEditor.getState().setStateFromSettings;
  const savedSettings = await settings.entries().then(entries => Object.fromEntries(entries) as Partial<AppState>);
  const directory = savedSettings.directory;

  if (directory) {
    const categories = arrayToObject(await getAllCategories(directory), 'id');
    const profiles = await getAllProfiles(directory);
    const mods = await getMods(directory);
    if (!savedSettings.mainProfile || !profiles.includes(savedSettings.mainProfile)) {
      savedSettings.mainProfile = profiles[0];
    }

    savedSettings.categories = categories;
    savedSettings.profiles = profiles;
    savedSettings.mods = mods;
  }

  setStateFromSettings({ ...savedSettings, settingsLoaded: true });
};

export async function saveSetting<K extends keyof IAppSettings>(key: K, value: IAppSettings[K]): Promise<void> {
  await settings.set(key, value);
}

loadSavedAppSettings();
