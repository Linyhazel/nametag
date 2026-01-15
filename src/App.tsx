import "./App.css";
import Lanyard from "./components/Lanyard";

function App() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={25}
        />
      </div>
    </div>
  );
}

export default App;
