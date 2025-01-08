import { BottomSection } from './components/bottomSection/BottomSection';
import { TopSection } from './components/topSection/TopSection';

function App() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default App;
