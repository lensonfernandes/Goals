"use client";

import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const types = [
  {
    id: "todos",
    name: "Todo",
    description: "A new Task",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "Task is under work",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "Task Done",
    color: "bg-green-500",
  },
];

const TaskTypeRadioGroup = () => {
  const [newTaskType, setNewTaskType] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={newTaskType} onChange={(e) => setNewTaskType(e)}>
          <div>
            {types.map((type) => (
              <RadioGroup.Option key={type.id} value={type.id}>
                {({ active, checked }) => (
                  <>
                    <div>
                      <div>
                        <div>
                          <RadioGroup.Label>{type.name}</RadioGroup.Label>
                          <RadioGroup.Description>
                            {type.description}
                          </RadioGroup.Description>
                        </div>
                        {checked && (
                          <div>
                            <CheckCircleIcon />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TaskTypeRadioGroup;
