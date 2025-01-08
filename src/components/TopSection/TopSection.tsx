import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Settings } from 'lucide-react';
import { MO2FolderSelector } from './MO2FolderSelector';
import { SetThemeButton } from './SetThemeButton';

export const TopSection = () => {
  return (
    <Accordion type="single" collapsible className='bg-secondary-foreground rounded-lg p-4' onValueChange={console.log}>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger icon={Settings} className='bg-secondary-foreground rounded-lg p-4' data-state="open">Settings</AccordionTrigger>
        <AccordionContent>
          <MO2FolderSelector />
          <SetThemeButton />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
