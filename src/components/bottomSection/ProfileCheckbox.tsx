import { FC, PropsWithChildren } from 'react';
import { ToggleGroupItem } from '../ui/toggle-group';

export const ProfileCheckbox: FC<{text: string}> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2">
      <ToggleGroupItem value={text} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {text}
      </ToggleGroupItem>
    </div>
  );
};
