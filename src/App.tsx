import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Circle } from "./components/Circle";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === "draggable" && over?.id === "droppable") {
      setIsDropped(true);
    }
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped && draggableMarkup}
        <Droppable>{isDropped ? draggableMarkup : "Drag here"}</Droppable>
      </DndContext>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <Circle x={20} y={20} radius={5} fill={"cornflowerblue"} />
        <Circle x={40} y={30} radius={2} fill={"firebrick"} />
      </svg>
    </>
  );
}

export default App;
