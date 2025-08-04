"use server";
import { Github } from "lucide-react";
import { auth } from "@/auth";
import { SignIn } from "./components/sign-in";
import UserInfo from "./components/user-info";
import axios from "axios";

export default async function Home() {
  const session = await auth();
  const token = session?.accessToken;

  // Always define these variables with defaults
  let followers = 0;
  let following = 0;
  let public_repos = 0;
  let total_private_repos = 0;

  // console.log(session);

  if (token) {
    const response = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    // Safely assign values if response exists
    followers = response.data?.followers ?? 0;
    following = response.data?.following ?? 0;
    public_repos = response.data?.public_repos ?? 0;
    total_private_repos = response.data?.total_private_repos ?? 0;
    // console.log(followers, following, public_repos, total_private_repos);
  }

  const name = session?.user.name ?? "";
  const email = session?.user.email ?? "";
  const imageUrl = session?.user.image ?? "";

  return (
    <div className="bg-[#010409] text-white flex h-screen items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div
        className={`border
      rounded-[10px] flex flex-col items-center 
      min-w-[300px] h-[450px] bg-[#151B23]
      ${token ? "justify-center" : ""}`}
      >
        {!token ? (
          <>
            <Github
              size={48}
              className="mt-10 bg-[#238636] rounded-[10px] p-[4px]"
            />
            <div className="mt-20 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h1 className="text-[64px] mb-5">Hi</h1>
                <SignIn />
              </div>
            </div>
          </>
        ) : (
          <UserInfo
            name={name}
            email={email}
            imageUrl={imageUrl}
            followers={followers}
            following={following}
            public_repos={public_repos}
            total_private_repos={total_private_repos}
          />
        )}
      </div>
    </div>
  );
}
