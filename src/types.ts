import { DirEntry } from '@tauri-apps/plugin-fs';

export interface IAppSettings {
  directory: string;
  copySuffix: string;
  theme: 'dark' | 'light';
  categoriesPaneSize: number;
  profilesPaneSize: number;
  settingsCollapsed: boolean;
  mainProfile: string;
}

export interface IMO2Category {
  id: string;
  name: string;
}

export interface IModInfo {
  name: string;
  files: DirEntry[];
  categories: string[];
  espList: string[];
  version?: string;
}
