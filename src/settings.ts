import { load } from '@tauri-apps/plugin-store';
import { IAppSettings } from './types';
import { useMO2FolderEditor } from './state';
import { initCategories, initProfiles } from './components/utils';

const settings = await load('settings.json', { autoSave: false });

export async function getSavedSetting<K extends keyof IAppSettings>(key: K): Promise<IAppSettings[K] | null> {
  return (await settings.get(key)) || null;
}

export const loadSavedAppSettings: () => Promise<void> = async () => {
  const setStateFromSettings = useMO2FolderEditor.getState().setStateFromSettings;
  const savedSettings = await settings.entries().then(entries => Object.fromEntries(entries) as Partial<IAppSettings>);
  setStateFromSettings({ ...savedSettings, settingsLoaded: true });
  const directory = savedSettings.directory;
  if (directory) {
    initCategories(directory);
    initProfiles(directory);
  }
};

export async function saveSetting<K extends keyof IAppSettings>(key: K, value: IAppSettings[K]): Promise<void> {
  await settings.set(key, value);
}

loadSavedAppSettings();
