export interface IAppSettings {
  directory: string;
  copySuffix: string;
  theme: 'dark' | 'light';
  categoriesPaneSize: number;
  profilesPaneSize: number;
  settingsCollapsed: boolean;
}

export interface IMO2Category {
  id: string;
  name: string;
}
