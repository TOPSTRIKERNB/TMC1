import './App.css';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-between antialiased overflow-hidden px-4">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-2xl mx-auto relative z-10">
          <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-tight">
            Opening Soon.
          </h1>
          <p className="relative z-10 text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-semibold max-w-lg mx-auto mt-2 leading-relaxed">
            When we arrive, nothing will look the same.
          </p>
        </div>
      </div>
      <div className="relative z-10 pb-8 w-full">
        <p className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-semibold tracking-wider">
          TOOL MACHINING CNC
        </p>
        <p className="text-xs md:text-sm text-neutral-400 text-center font-sans mt-2">
          Powered by Vectifly Ai
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default App;
