import { FC, useRef, useState } from 'react';
import { open } from '@tauri-apps/plugin-dialog';
import { exists } from '@tauri-apps/plugin-fs';
import { join } from '@tauri-apps/api/path';
import { Folder } from 'lucide-react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
// import { useMO2DirEditorStore } from '@/store';
import { Label } from '../ui/label';
import { useMO2FolderEditor } from '@/state';
import { arrayToObject, initCategories, initProfiles } from '../utils';

export const MO2FolderSelector: FC = () => {
  const setDirectory = useMO2FolderEditor(state => state.setDirectory);
  const setProfiles = useMO2FolderEditor(state => state.setProfiles);
  const setCategories = useMO2FolderEditor(state => state.setCategories);
  const directory = useMO2FolderEditor(state => state.directory);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);

  const openFileSelector = async () => {
    const mo2Dir = await open({ directory: true, canCreateDirectories: false });
    if (!mo2Dir) return;
    handleValueDebounce(mo2Dir);
    if (inputRef.current) inputRef.current.value = mo2Dir;
  };

  const handleValueDebounce = (value: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const isValidDirectory = (await exists(value)) && (await exists(await join(value, 'mods')));
      if (isValidDirectory) {
        setDirectory(value);
        initProfiles(value);
        initCategories(value);
        setError(false);
      } else {
        console.error('Not a valid Mod Organizer 2 Directory.');
        setError(true);
      }
    }, 500);
  };

  return (
    <div className="flex flex-col w-full max-w justify-start gap-1">
      <div className="flex flex-1 w-full max-w items-center gap-3">
        <Input className="w-full max-w" type="email" placeholder="e.g., D:\Games\Mod Organizer 2" onChange={e => handleValueDebounce(e.target.value)} ref={inputRef} defaultValue={directory} />
        <Button type="submit" onClick={() => openFileSelector()}>
          <Folder size={16} />
          Browse
        </Button>
      </div>
      {(!directory || error) && <Label className={`opacity-50${error ? ' text-destructive' : ''}`}>Select a valid Mod Organizer 2 Folder Directory to get started...</Label>}
    </div>
  );
};
