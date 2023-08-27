"use client"

import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

const TodoCard = ({
    todo, index, id, innerRef, draggableProps, dragHandleProps
}: Props) => {
  return (
    <div {...draggableProps} {...dragHandleProps} ref={innerRef}
    className='bg-white rounded-md space-y-2 drop-shadow'>
        <h1>Hello</h1>
    </div>
  )
}

export default TodoCard