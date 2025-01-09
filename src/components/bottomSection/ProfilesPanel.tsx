import { ResizablePanel } from '../ui/resizable';
import { useMO2FolderEditor } from '@/state';
import { useDebouncedCallback } from 'use-debounce';
import { TypographyH4, TypographyMuted } from '../ui/typography';

export const ProfilesPanel = () => {
  const saveDefaultProfilePaneSize = useMO2FolderEditor(state => state.setProfilesPaneSize);
  const defaultProfilesPaneSize = useMO2FolderEditor(state => state.profilesPaneSize);

  const debouncedProfilesSizeSave = useDebouncedCallback((value: number) => {
    saveDefaultProfilePaneSize(value);
  }, 1000);

  return (
    <ResizablePanel
      order={3}
      defaultSize={defaultProfilesPaneSize}
      minSize={10}
      maxSize={30}
      onResize={debouncedProfilesSizeSave}
      collapsible={true}
      id="profile-panel"
      className="flex flex-col items-center bg-secondary-foreground rounded-lg">
      <div className="pt-4 px-4 w-full text-center">
        <TypographyH4>Profiles</TypographyH4>
        <TypographyMuted>All changes will be applied to the selected profiles.</TypographyMuted>
      </div>
    </ResizablePanel>
  );
};
