import { create } from 'zustand';
import { IAppSettings, IMO2Category } from './types';
import { saveSetting } from './settings';

interface State extends IAppSettings {
  categories: Record<string, IMO2Category>;
  profiles: string[];
  selectedCategories: string[];
  selectedProfiles: string[];
  mainProfile: string;
  settingsLoaded: boolean;
}

interface Actions {
  setTheme: (theme: 'dark' | 'light') => void;
  setDirectory: (directory: string) => void;
  setCopySuffix: (suffix: string) => void;
  setCategoriesPaneSize: (size: number) => void;
  setProfilesPaneSize: (size: number) => void;
  setSettingsCollapsed: (open: boolean) => void;
  setStateFromSettings: (settings: Partial<IAppSettings & Pick<State, 'settingsLoaded'>>) => void;
  setCategories: (categories: Record<string, IMO2Category>) => void;
  setProfiles: (profiles: string[]) => void;
  setSelectedCategories: (selectedCategories: string[]) => void;
  setSelectedProfiles: (selectedProfiles: string[]) => void;
  setMainProfile: (mainProfile: string) => void;
}

const defaultState: State = {
  theme: 'dark',
  directory: '',
  copySuffix: '',
  categoriesPaneSize: 15,
  profilesPaneSize: 15,
  settingsCollapsed: true,
  categories: {},
  profiles: [],
  selectedCategories: [],
  selectedProfiles: [],
  mainProfile: '',
  settingsLoaded: false,
};

export const useMO2FolderEditor = create<State & Actions>(set => ({
  ...defaultState,

  setTheme: theme => {
    set({ theme });
    saveSetting('theme', theme);
  },
  setDirectory: directory => {
    set({ directory: directory });
    saveSetting('directory', directory);
  },
  setCopySuffix: suffix => {
    set({ copySuffix: suffix });
    saveSetting('copySuffix', suffix);
  },
  setCategoriesPaneSize: size => {
    set({ categoriesPaneSize: size });
    saveSetting('categoriesPaneSize', size);
  },
  setProfilesPaneSize: size => {
    set({ profilesPaneSize: size });
    saveSetting('profilesPaneSize', size);
  },
  setSettingsCollapsed: settingsCollapsed => {
    set({ settingsCollapsed });
    saveSetting('settingsCollapsed', settingsCollapsed);
  },
  setStateFromSettings: settings => set(settings),
  setCategories: categories => set({ categories: categories }),
  setProfiles: profiles => set({ profiles: profiles }),
  setSelectedCategories: selectedCategories => set({ selectedCategories }),
  setSelectedProfiles: selectedProfiles => set({ selectedProfiles }),
  setMainProfile: mainProfile => set({ mainProfile }),
}));
