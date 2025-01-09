import { ResizablePanel } from '../ui/resizable';
import { useMO2FolderEditor } from '@/state';
import { useDebouncedCallback } from 'use-debounce';
import { TypographyH1, TypographyH4 } from '../ui/typography';

export const CategoriesPanel = () => {
  const saveDefaultCategoriesPaneSize = useMO2FolderEditor(state => state.setCategoriesPaneSize);
  const defaultCategoriesPaneSize = useMO2FolderEditor(state => state.categoriesPaneSize);

  const debouncedCategoriesSizeSave = useDebouncedCallback((value: number) => {
    console.log(value);
    saveDefaultCategoriesPaneSize(value);
  }, 1000);

  return (
    <ResizablePanel order={1} defaultSize={defaultCategoriesPaneSize} minSize={10} maxSize={30} onResize={debouncedCategoriesSizeSave} collapsible={true} id="categories-panel" className="flex flex-col items-center">
      <TypographyH4>Categories</TypographyH4>
    </ResizablePanel>
  );
};
