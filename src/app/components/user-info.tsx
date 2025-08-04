import { auth } from "@/auth";
import Image from "next/image";
import { SignOut } from "./sign-out";
import axios from "axios";

type UserInfoProps = {
  name?: string;
  email?: string;
  imageUrl?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  total_private_repos?: number;
};

export default function UserInfo({
  name = "",
  email = "",
  imageUrl = "",
  followers = 0,
  following = 0,
  public_repos = 0,
  total_private_repos = 0,
}: UserInfoProps) {
//   console.log(followers, following, public_repos, total_private_repos)

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-center relative">
          <Image
            src={`${imageUrl}`}
            alt="github profile picture"
            width={80}
            height={80}
            className="size-16 rounded-full"
          />
        <SignOut />
      </div>
      <label htmlFor="username">Name </label>
      <input
        type="text"
        id="username"
        aria-label="disabled input 2"
        className="bg-gray-500  text-white text-sm rounded-lg block w-[275px] p-2.5 cursor-pointer"
        value={`${name}`}
        readOnly
      />
      <label htmlFor="email">Email </label>
      <input
        type="email"
        id="email"
        aria-label="disabled input 2"
        className="bg-gray-500  text-white text-sm rounded-lg block w-[275px] p-2.5 cursor-pointer"
        value={`${email}`}
        readOnly
      />
      <label htmlFor="followers">Followers</label>
      <input
        type="text"
        id="followers"
        aria-label="disabled input 2"
        className="bg-gray-500  text-white text-sm rounded-lg block w-[275px] p-2.5 cursor-pointer"
        value={`${followers}`}
        readOnly
      />
      <label htmlFor="following">Following</label>
      <input
        type="text"
        id="following"
        aria-label="disabled input 2"
        className="bg-gray-500  text-white text-sm rounded-lg block w-[275px] p-2.5 cursor-pointer"
        value={`${following}`}
        readOnly
      />
      <label htmlFor="repos">Number of Repos</label>
      <input
        type="text"
        id="repos"
        aria-label="disabled input 2"
        className="bg-gray-500  text-white text-sm rounded-lg block w-[275px] p-2.5 cursor-pointer"
        value={`${public_repos + total_private_repos}`}
        readOnly
      />
    </div>
  );
}
