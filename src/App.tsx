import { Circle } from "./components/Circle";

function App() {
  return (
    <svg width="1000" height="1000">
      <Circle id="0" x={20} y={20} radius={50} fill={"cornflowerblue"} />
      <Circle id="1" x={40} y={30} radius={20} fill={"firebrick"} />
    </svg>
  );
}

export default App;
