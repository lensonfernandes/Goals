"use client";

import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import {
  DragDropContent,
  DragDropContext,
  Droppable,
} from "react-beautiful-dnd";

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
    //console.log(getBoard());
  }, [getBoard]);

  return (
    <h1>Goals</h1>

    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/*All columns*/}</div>}
    //   </Droppable>
    // </DragDropContext>
    // <div>Board</div>
  );
};

export default Board;
