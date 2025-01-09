import { ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable';
import { CategoriesPanel } from './CategoriesPanel';
import { ProfilesPanel } from './ProfilesPanel';
import { ModsPanel } from './ModsPanel';

export const BottomSection = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="bg-secondary-foreground rounded-lg p-4">
      <CategoriesPanel />
      <ResizableHandle withHandle />
      <ModsPanel />
      <ResizableHandle withHandle />
      <ProfilesPanel />
    </ResizablePanelGroup>
  );
};
