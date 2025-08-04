"use client";
import { login } from "@/lib/actions/auth";
import React from "react";

export const SignIn = () => {
  return (
    <button
      className="py-2 px-4
         bg-[#238636] text-white
         rounded-lg
         text-base font-medium
         hover:bg-[#09a026] cursor-pointer
         "
        onClick={()=>login()}
    >
      Log in using GitHub
    </button>
  );
};
