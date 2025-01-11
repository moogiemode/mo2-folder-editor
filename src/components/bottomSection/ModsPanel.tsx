import { useMO2FolderEditor } from '@/state';
import { ResizablePanel } from '../ui/resizable';
import { TypographyH4, TypographyMuted } from '../ui/typography';
import { MainProfileSelector } from './MainProfileSelector';
import { ModList } from './Modlist';
import { join } from '@tauri-apps/api/path';
import { exists, readTextFile } from '@tauri-apps/plugin-fs';
import { useEffect, useState } from 'react';
import { getMods } from '../utils';

export const ModsPanel = () => {
  const mainProfile = useMO2FolderEditor(state => state.mainProfile);
  const directory = useMO2FolderEditor(state => state.directory);

  const [modList, setModList] = useState<string[]>([]);

  useEffect(() => {
    if (mainProfile && directory) {
      const getModListItems = async () => {
        console.log(await getMods(directory));
        const modlistFilePath = await join(directory, 'profiles', mainProfile, 'modlist.txt');
        return setModList((await readTextFile(modlistFilePath)).split('\n'));
      };

      getModListItems();
    }
  }, [directory, mainProfile]);

  console.log(modList);

  return (
    <ResizablePanel order={2} id="mods-panel" className="flex flex-col items-center bg-secondary-foreground rounded-lg">
      <div className="pt-4 px-4 w-full text-center">
        <TypographyH4>ModList</TypographyH4>
        <MainProfileSelector />
        <TypographyMuted>The ModList for your main selected profile</TypographyMuted>
      </div>
      <ModList />
    </ResizablePanel>
  );
};
