import { load } from '@tauri-apps/plugin-store';
import { IAppSettings } from './types';
import { useMO2FolderEditor } from './state';

const settings = await load('settings.json', { autoSave: false });

async function getSavedSetting<K extends keyof IAppSettings>(key: K): Promise<IAppSettings[K] | null> {
  return (await settings.get(key)) || null;
}

export const loadSavedAppSettings: () => Promise<void> = async () => {
  const setDirectory = useMO2FolderEditor.getState().setDirectory;
  const setCopySuffix = useMO2FolderEditor.getState().setCopySuffix;
  const setTheme = useMO2FolderEditor.getState().setTheme;
  const setCategoriesPaneSize = useMO2FolderEditor.getState().setCategoriesPaneSize;
  const setProfilesPaneSize = useMO2FolderEditor.getState().setCategoriesPaneSize;
  const setSettingsCollapsed = useMO2FolderEditor.getState().setSettingsCollapsed;

  const promises: Record<keyof IAppSettings, Promise<void>> = {
    directory: getSavedSetting('directory').then(dir => {
      if (dir) setDirectory(dir);
    }),
    copySuffix: getSavedSetting('copySuffix').then(suffix => {
      if (suffix) setCopySuffix(suffix);
    }),
    theme: getSavedSetting('theme').then(theme => {
      if (theme) setTheme(theme);
    }),
    categoriesPaneSize: getSavedSetting('categoriesPaneSize').then(size => {
      if (size) setCategoriesPaneSize(size);
    }),
    profilesPaneSize: getSavedSetting('profilesPaneSize').then(size => {
      if (size) setProfilesPaneSize(size);
    }),
    settingsCollapsed: getSavedSetting('settingsCollapsed').then(settingsCollapsed => {
      setSettingsCollapsed(Boolean(settingsCollapsed));
    }),
  };

  Promise.all(Object.values(promises));
};

export async function saveSetting<K extends keyof IAppSettings>(key: K, value: IAppSettings[K]): Promise<void> {
  await settings.set(key, value);
}

loadSavedAppSettings();
