import { ResizablePanel } from '../ui/resizable';
import { TypographyH4, TypographyMuted } from '../ui/typography';
import { MainProfileSelector } from './MainProfileSelector';

export const ModsPanel = () => {
  return (
    <ResizablePanel order={2} id="mods-panel" className="flex flex-col items-center bg-secondary-foreground rounded-lg">
      <div className="pt-4 px-4 w-full text-center">
        <TypographyH4>ModList</TypographyH4>
        <MainProfileSelector />
        <TypographyMuted>The ModList for your main selected profile</TypographyMuted>
      </div>
    </ResizablePanel>
  );
};
