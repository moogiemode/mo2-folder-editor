import { create } from 'zustand';
import { IAppSettings } from './types';

type State = IAppSettings;

interface Actions {
  setTheme: (theme: 'dark' | 'light') => void;
  setDirectory: (directory: string) => void;
  setCopySuffix: (suffix: string) => void;
  setCategoriesPaneSize: (size: number) => void;
  setProfilesPaneSize: (size: number) => void;
  setSettingsCollapsed: (open: boolean) => void;
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
  setDirectory: directory => set({ directory: directory }),
  setCopySuffix: suffix => set({ copySuffix: suffix }),
  setCategoriesPaneSize: size => set({ categoriesPaneSize: size }),
  setProfilesPaneSize: size => set({ profilesPaneSize: size }),
  setSettingsCollapsed: open => set({ settingsCollapsed: open }),
}));
