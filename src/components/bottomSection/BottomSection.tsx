import { ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable';
import { CategoriesPanel } from './CategoriesPanel';
import { ProfilesPanel } from './ProfilesPanel';
import { ModsPanel } from './ModsPanel';

export const BottomSection = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg p-4 flex gap-4">
      <CategoriesPanel />
      <ResizableHandle withHandle className='bg-inherit' />
      <ModsPanel />
      <ResizableHandle withHandle className='bg-inherit' />
      <ProfilesPanel />
    </ResizablePanelGroup>
  );
};
