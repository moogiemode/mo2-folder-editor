import { ResizablePanel } from '../ui/resizable';
import { useMO2FolderEditor } from '@/state';
import { useDebouncedCallback } from 'use-debounce';
import { TypographyH4, TypographyMuted } from '../ui/typography';
import { ProfileCheckbox } from './ProfileCheckbox';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { CategoriesPanelContent } from './CategoriesPanelContent';

export const CategoriesPanel = () => {
  const saveDefaultCategoriesPaneSize = useMO2FolderEditor(state => state.setCategoriesPaneSize);
  const defaultCategoriesPaneSize = useMO2FolderEditor(state => state.categoriesPaneSize);

  const debouncedCategoriesSizeSave = useDebouncedCallback((value: number) => {
    console.log(value);
    saveDefaultCategoriesPaneSize(value);
  }, 1000);

  return (
    <ResizablePanel
      order={1}
      defaultSize={defaultCategoriesPaneSize}
      minSize={10}
      maxSize={30}
      onResize={debouncedCategoriesSizeSave}
      collapsible={true}
      id="categories-panel"
      className="flex flex-col items-center bg-secondary-foreground rounded-lg">
      <div className="pt-4 px-4 w-full text-center">
        <TypographyH4>Categories</TypographyH4>
        <TypographyMuted>These Categories will be added to all newly cloned or created Mods</TypographyMuted>
      </div>
      <CategoriesPanelContent />
    </ResizablePanel>
  );
};
