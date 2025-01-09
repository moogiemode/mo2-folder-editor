import { BottomSection } from './components/bottomSection/BottomSection';
import { TopSection } from './components/topSection/TopSection';
import { Skeleton } from './components/ui/skeleton';
import { useMO2FolderEditor } from './state';

function App() {
  const settingsLoaded = useMO2FolderEditor(state => state.settingsLoaded);

  if (!settingsLoaded) {
    return (
      <div className="w-full h-full flex flex-col gap-4">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default App;
