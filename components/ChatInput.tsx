"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import useSWR from "swr";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toast notification to say loading!
    const notification = toast.loading("Thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification to say successful!
      toast.success("Here are my thoughts!", {
        id: notification,
      });
    });
  };

  return (
    <div>
      <form
        onSubmit={sendMessage}
        className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
      >
        <div className="relative flex h-full flex-1 md:flex-col">
          <div className="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
          <div className="flex flex-col w-full py-2.5 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gpt-dark/50 dark:text-white dark:bg-gpt-gray-2 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <input
              disabled={!session}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="Type a message..."
              className="focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
            ></input>
            <button
              disabled={!prompt || !session}
              className="bg-gpt-cta-1 hover:opacity-50 text-white font-bold px-4 py-2 disabled:bg-gray-500 disabled:cursor-not-allowed rounded absolute p-1 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gpt-dark disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
              type="submit"
            >
              <PaperAirplaneIcon className=" h-4 w-4 -rotate-45" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
