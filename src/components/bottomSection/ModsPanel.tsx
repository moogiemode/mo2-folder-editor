import { ResizablePanel } from '../ui/resizable';
import { TypographyH4 } from '../ui/typography';

export const ModsPanel = () => {
  return (
    <ResizablePanel order={2} id="mods-panel" className="flex flex-col items-center">
      <TypographyH4>Mods</TypographyH4>
    </ResizablePanel>
  );
};
