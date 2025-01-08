import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Settings } from 'lucide-react';
import { MO2FolderSelector } from './MO2FolderSelector';
import { SetThemeButton } from './SetThemeButton';
import { useMO2FolderEditor } from '@/state';

export const TopSection = () => {
  const settingsCollapsed = useMO2FolderEditor(state => state.settingsCollapsed);
  const setSettingsCollapsed = useMO2FolderEditor(state => state.setSettingsCollapsed);
  return (
    <Accordion type="single" collapsible className="bg-secondary-foreground rounded-lg p-4" onValueChange={value => setSettingsCollapsed(!value)} defaultValue={settingsCollapsed ? undefined : 'settings'}>
      <AccordionItem value="settings" className="border-none">
        <AccordionTrigger icon={Settings} className="bg-secondary-foreground rounded-lg p-4" data-state="open">
          Settings
        </AccordionTrigger>
        <AccordionContent>
          <MO2FolderSelector />
          <SetThemeButton />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
