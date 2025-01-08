import { create } from 'zustand';
import { IAppSettings } from './types';
import { saveSetting } from './settings';

type State = IAppSettings;

interface Actions {
  setTheme: (theme: 'dark' | 'light') => void;
  setDirectory: (directory: string) => void;
  setCopySuffix: (suffix: string) => void;
  setCategoriesPaneSize: (size: number) => void;
  setProfilesPaneSize: (size: number) => void;
  setSettingsCollapsed: (open: boolean) => void;
  setStateFromSettings: (settings: Partial<IAppSettings>) => void;
}

const defaultState: State = {
  theme: 'dark',
  directory: '',
  copySuffix: '',
  categoriesPaneSize: 15,
  profilesPaneSize: 15,
  settingsCollapsed: true,
};

export const useMO2FolderEditor = create<State & Actions>(set => ({
  theme: defaultState.theme,
  directory: defaultState.directory,
  copySuffix: defaultState.copySuffix,
  categoriesPaneSize: defaultState.categoriesPaneSize,
  profilesPaneSize: defaultState.profilesPaneSize,
  settingsCollapsed: defaultState.settingsCollapsed,

  setTheme: theme => set({ theme }),
  setDirectory: directory => {
    console.log(directory);
    set({ directory: directory });
    saveSetting('directory', directory);
  },
  setCopySuffix: suffix => set({ copySuffix: suffix }),
  setCategoriesPaneSize: size => set({ categoriesPaneSize: size }),
  setProfilesPaneSize: size => set({ profilesPaneSize: size }),
  setSettingsCollapsed: settingsCollapsed => {
    set({ settingsCollapsed });
    saveSetting('settingsCollapsed', settingsCollapsed);
  },
  setStateFromSettings: settings => set(settings),
}));
