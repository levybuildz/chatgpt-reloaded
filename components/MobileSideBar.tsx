import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import SideBar from "./SideBar";

interface Props {
  closeSidebar: () => void;
}

const MobileSideBar = ({ closeSidebar }: Props) => {
  return (
    <div className="flex backdrop">
      <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gpt-dark">
        <div className="absolute top-0 right-0 -mr-12 pt-2 opacity-100">
          <button
            type="button"
            className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none"
            onClick={closeSidebar}
          >
            <XMarkIcon />
          </button>
        </div>
        <SideBar />
      </div>
      <div className="w-14 flex-shrink-0"></div>
    </div>
  );
};

export default MobileSideBar;
