"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { useBoardStore } from "@/store/BoardStore";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";

function Modal() {
  // let [isOpen, setIsOpen] = useState(true);
  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const  [addTask, newTaskInput, setNewTaskInput, newTaskType] = useBoardStore((state) => [
    state.addTask,
    state.newTaskInput,
    state.setNewTaskInput,
    state.newTaskType
  ]);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if(!newTaskInput)
      return;

      addTask(newTaskInput, newTaskType)

     // setImage(null)
      closeModal();
  };

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        onClose={closeModal}
        as="form"
        className={"relative z-10"}
        onSubmit={handleSubmit}
      >
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* <div className="fixed inset-0 bg-black bg-opacity-25" /> */}
              <Dialog.Panel
                className={
                  "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl tranisition-a"
                }
              >
                <Dialog.Title>Add a Task</Dialog.Title>

                <div>
                  <input
                    type="text"
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    placeholder="Enter your next goal"
                    className="w-full border border-gray-300 rounded-md ouotline-none p-5"
                  />
                </div>
                {/* 
                TaskType */}
                <TaskTypeRadioGroup />
                <div>
                  <button type="submit" >Add Task</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
      </Dialog>
    </Transition>
  );
}

export default Modal;