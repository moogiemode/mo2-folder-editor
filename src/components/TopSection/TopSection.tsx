import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Settings } from 'lucide-react';
import { SetThemeButton } from './SetThemeButton';
import { MO2FolderSelector } from './MO2FolderSelector';

export const TopSection = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger icon={Settings}>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <MO2FolderSelector />
          <SetThemeButton />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
