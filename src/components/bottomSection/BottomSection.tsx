import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export const BottomSection = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="bg-secondary-foreground rounded-lg p-4">
      <ResizablePanel defaultSize={15} minSize={10} maxSize={30}>
        Categories
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Mods</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={15} minSize={10} maxSize={30}>
        Profiles
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
