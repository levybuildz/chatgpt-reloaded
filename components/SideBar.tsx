"use client";

import "../styles/globals.css";
import NewChat from "./NewChat";
("../components/NewChat");
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <nav className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="md:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2 scrollbar-hide">
            {loading && (
              <div className="animate-pulse text-center text-gpt-white-1">
                <p>Loading Chats...</p>
              </div>
            )}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {/* <div onClick={() => signOut()} className="chatRow flex truncate">
        <MoonIcon className="h-5 w-5" />
        <p className="flex-1">Dark mode</p>
      </div> */}

      <div
        onClick={() => window.open("https://github.com.levyloiseau")}
        className="chatRow flex truncate"
      >
        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        <p className="flex-1">Github</p>
      </div>

      <div className="flex">
        {session && (
          <div
            onClick={() => signOut()}
            className="chatRow flex-1 inline-flex truncate"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <p className="flex-1">Logout</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SideBar;
