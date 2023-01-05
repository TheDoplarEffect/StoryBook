import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Toggle } from "./Toggle";
import clsx from "clsx";

type States = "light" | "dark" | "hot-pink";

type Input = {
  state: States;
  setState: React.Dispatch<React.SetStateAction<States>>;
};

export function Modal({ state, setState }: Input) {
  let [isOpen, setIsOpen] = useState(false);
  let [mode, setMode] = useState(false);

  return (
    <div className={state}>
      <Toggle enabled={isOpen} setEnabled={setIsOpen} />
      <Transition
        show={isOpen}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur" />
          <div className="w-screen h-screen flex justify-center">
            <Dialog.Panel className="fixed w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-200 p-6 text-left align-middle shadow-xl">
              <Dialog.Title>Change Theme</Dialog.Title>
              <Dialog.Description>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.{" "}
              </Dialog.Description>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setState("light");
                  }}
                >
                  Light
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setState("dark");
                  }}
                >
                  Dark
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setState("hot-pink");
                  }}
                >
                  Hot-Pink
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
      <div
        className={clsx(
          " dark:bg-red-800",
          state == "hot-pink" ? "bg-pink-600" : "bg-slate-200"
        )}
      >
        <p
          className={clsx(
            " dark:text-white",
            state == "hot-pink" ? "text-yellow-300" : "text-black"
          )}
        >
          This is some text that will see the effects of the effects
        </p>
      </div>
    </div>
  );
}
