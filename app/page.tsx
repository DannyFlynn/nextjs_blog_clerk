import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await currentUser();
  if(user){
    redirect("/topics")
    console.log(user)
  }

  return (
    <div className="w-full h-[100vh]  font-bold text-4xl p-8 flex flex-col md:justify-center  items-center overflow-hidden home-containter mt-16 md:mt-0">
      <h1 className="lg:w-1/2">
        🧑‍💻👩‍💻
        <p className="relative">
          Join CodeSphere,
          <span className="bg-black bg-opacity-40 w-full lg:w-1/3 h-2/3 absolute -left-3 bottom-0 dark:bg-white dark:bg-opacity-40 rounded-md"></span>
        </p>
        the ultimate social hub where developers connect, share, and innovate
        like never before!🕸️
      </h1>
      <div className="lg:w-1/2 flex my-8">
        <SignedOut>
          <SignInButton  >
            <Button>Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
