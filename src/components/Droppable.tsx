import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

export const Droppable = (props: PropsWithChildren) => {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });

  const style = {
    backgroundColor: isOver ? "lightgreen" : "coral",
    width: "100px",
    height: "100px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
