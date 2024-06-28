import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Topic from "@/components/topics/Topic";

type Params = {
  id: string;
};

const options = [
  {
    id: 1,
    title: "NextJS",
    description: "Check out tips and hacks to up your game in NextJS.",
  },
  {
    id: 2,
    title: "ReactJS",
    description: "Check out tips and hacks to up your game in ReactJS.",
  },
  {
    id: 3,
    title: "Python",
    description: "Check out tips and hacks to up your game in Python.",
  },
  {
    id: 4,
    title: "Godot4",
    description: "Check out tips and hacks to up your game in Godot4.",
  },
  {
    id: 5,
    title: "Php",
    description: "Check out tips and hacks to up your game in Php.",
  },
];

const TopicChosen = async ({ params }: { params: Params }) => {


  const user = await currentUser();
  if (!user) {
    redirect("/");
    //console.log(user)
  }

  return (
    <div className="mt-14 w-full md:flex justify-end p-4 relative">
      <SignedIn>
        {/* HELLO {params.id} */}

        <div className="hidden md:flex flex-col md:w-1/3 md:h-2/3 justify-around absolute top-5 left-0">
          {options.map((option) => (
            <p key={option.id} className="mx-10 font-semibold my-12 underline">
              <a href={`/posts/${option.title}`}>{option.title}</a>
            </p>
          ))}
        </div>
        <Topic />
      </SignedIn>
    </div>
  );
};

export default TopicChosen;
