'use client'

import React, { useEffect} from "react";
import {
  DragDropContent,
  DragDropContext,
  Droppable,
} from "react-beautiful-dnd";

const Board = () => {

  useEffect(() => {
    //getBoard
  
    return () => {
      
    }
  }, [])
  
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/*All columns*/}</div>}
      </Droppable>
    </DragDropContext>
    // <div>Board</div>
  );
};

export default Board;
