"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center bg-gpt-gray-1 h-screen w-screen">
      <h1 className="text-white font-bold text-5xl">ChatGPT Reloaded</h1>

      <Image
        src="/ChatGPT.png"
        width={300}
        height={300}
        alt={"ChatGpt Relaoded Logo"}
      />

      <button
        onClick={() => signIn("google")}
        className="bg-white px-5 py-3 rounded text-gpt-gray-1 font-bold text-3xl animate-pulse"
      >
        Sign in Here
      </button>

      <p className="font-bold text-white">V 1.0.0</p>
    </div>
  );
};

export default Login;
