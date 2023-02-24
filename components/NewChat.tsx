"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import "../styles/globals.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

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
    <div
      onClick={createNewChat}
      className="border-[#4e4d53] border text-gpt-white-1 rounded chatRow"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
