"use client";

import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import MobileSideBar from "./MobileSideBar";

function MobileNav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userID: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gpt-gray-1 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
      <button
        type="button"
        className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none hover:text-white"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-5 w-5" />
      </button>
      <h1 className="flex-1 text-center text-base font-normal">
        ChatGPT Reloaded
      </h1>
      <button
        type="button"
        className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none hover:text-white"
        onClick={createNewChat}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
      {showSidebar && <MobileSideBar closeSidebar={closeSidebar} />}
    </div>
  );
}

export default MobileNav;
