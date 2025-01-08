import { FC, useRef } from 'react';
import { open } from '@tauri-apps/plugin-dialog';
import { exists } from '@tauri-apps/plugin-fs';
import { join } from '@tauri-apps/api/path';
import { Folder } from 'lucide-react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
// import { useMO2DirEditorStore } from '@/store';
import { Label } from '../ui/label';
import { useMO2FolderEditor } from '@/state';

export const MO2FolderSelector: FC = () => {
  const setDirectory = useMO2FolderEditor(state => state.setDirectory);
  const directory = useMO2FolderEditor(state => state.directory);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openFileSelector = async () => {
    const mo2Dir = await open({ directory: true, canCreateDirectories: false });
    if (!mo2Dir) return;
    console.log(mo2Dir);
    const modsFoldr = await exists(await join(mo2Dir, 'mods'));
    if (!modsFoldr) {
      console.error('Invalid MO2 directory');
      return;
    }
    // setMo2Directory(mo2Dir);
    if (inputRef.current) inputRef.current.value = mo2Dir;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const isValidDirectory = (await exists(e.target.value)) && (await exists(await join(e.target.value, 'mods')));
      if (!isValidDirectory) return;
      setDirectory(e.target.value);
    }, 500);
  };

  return (
    <div className="flex flex-col w-full max-w justify-start gap-1">
      <div className="flex flex-1 w-full max-w items-center gap-3">
        <Input className="w-full max-w" type="email" placeholder="e.g., D:\Games\Mod Organizer 2" onChange={handleChange} ref={inputRef} />
        <Button type="submit" onClick={() => openFileSelector()}>
          <Folder size={16} />
          Browse
        </Button>
      </div>
      {!directory && <Label className="opacity-50">Select the Mod Organizer 2 Folder Directory to get started...</Label>}
    </div>
  );
};
