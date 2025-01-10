import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useMO2FolderEditor } from '@/state';

export const MainProfileSelector = () => {
  const profiles = useMO2FolderEditor(state => state.profiles);
  const mainProfile = useMO2FolderEditor(state => state.mainProfile);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{mainProfile}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {profiles.map(profile => (
            <DropdownMenuItem key={profile}>{profile}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
