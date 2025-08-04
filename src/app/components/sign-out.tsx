"use client";
import { logout } from "@/lib/actions/auth";
import { LogOutIcon } from "lucide-react";
import React from "react";

export const SignOut = () => {
  return <LogOutIcon onClick={()=>logout()} className="absolute right-0 cursor-pointer" />;
};
