"use client";
import { useState, Fragment, useRef, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { useBoardStore } from "@/store/BoardStore";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/20/solid";

function Modal() {
  // let [isOpen, setIsOpen] = useState(true);

  const imagePickerRef = useRef<HTMLInputElement>(null);

  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const [addTask, image, setImage, newTaskInput, setNewTaskInput, newTaskType] =
    useBoardStore((state) => [
      state.addTask,
      state.image,
      state.setImage,

      state.newTaskInput,
      state.setNewTaskInput,
      state.newTaskType,
    ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTaskInput) return;

    addTask(newTaskInput, newTaskType, image);

    setImage(null);
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
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl tranisition-a"
                }
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-800 pb-3"
                >
                  Add a Task
                </Dialog.Title>

                <div className="mt-2">
                  <input
                    type="text"
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    placeholder="Enter your next goal"
                    className="w-full border border-gray-300 rounded-md ouotline-none p-5"
                  />
                </div>

                <TaskTypeRadioGroup />

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      imagePickerRef.current?.click();
                    }}
                  >
                    <PhotoIcon className="h-6 w-6 mr-2 inline-block" /> Upload
                    Image
                  </button>
                  {image && (
                    <Image
                      src={URL.createObjectURL(image)}
                      width={200}
                      height={200}
                      alt="image"
                      className="w-full h-44 object-cover mt-2"
                      onClick={() => {
                        setImage(null);
                        // imagePickerRef.current?.click()
                      }}
                    />
                  )}

                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      //check if e is an image
                      if (!e.target.files![0].type.startsWith("image/")) return;
                      setImage(e.target.files![0]);
                    }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={!newTaskInput}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4 w-full sm:w-auto sm:text-sm disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    Add Task
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
