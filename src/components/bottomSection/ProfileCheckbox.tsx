import { Checkbox } from '@/components/ui/checkbox';
import { FC, PropsWithChildren } from 'react';

export const ProfileCheckbox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {children}
      </label>
    </div>
  );
};
