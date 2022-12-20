import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Circle } from "./components/Circle";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const [circlePosition, setCirclePosition] = useState({
    x: 20,
    y: 20,
  });
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === "draggable" && over?.id === "droppable") {
      setIsDropped(true);
    }

    if (active.id === "circle-0") {
      setCirclePosition(({ x, y }) => ({
        x: x + event.delta.x,
        y: y + event.delta.y,
      }));
    }
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped && draggableMarkup}
        <Droppable>{isDropped ? draggableMarkup : "Drag here"}</Droppable>
      </DndContext>
      <svg width="1000" height="1000">
        <Circle
          id="0"
          {...circlePosition}
          radius={50}
          fill={"cornflowerblue"}
        />
        <Circle id="1" x={40} y={30} radius={20} fill={"firebrick"} />
      </svg>
    </>
  );
}

export default App;
