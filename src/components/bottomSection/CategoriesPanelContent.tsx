import { useMO2FolderEditor } from '@/state';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Pencil, Trash2 } from 'lucide-react';

export const CategoriesPanelContent = () => {
  const categories = useMO2FolderEditor(state => state.categories);
  const setSelectedCategories = useMO2FolderEditor(state => state.setSelectedCategories);
  const selectedCategories = useMO2FolderEditor(state => state.selectedCategories);

  return (
    <ToggleGroup type="multiple" orientation="vertical" className="flex-col w-full p-4" onValueChange={setSelectedCategories} value={selectedCategories}>
      {Object.values(categories).map(category => (
        <ToggleGroupItem value={category.id} className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full justify-between" key={`category-${category.id}`}>
          {category.name}
          <div className="flex gap-2 h-full">
            <Pencil size={12} color='red' fill="blue" strokeWidth={4}/>
            <Trash2 size={12}/>
          </div>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
