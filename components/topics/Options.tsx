"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";

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

const Options =  () => {

  const topicSelection = (id: Number) => {
    console.log("topic selected id number: ", id)
  }

  return (
    <div className="w-full  md:flex justify-center flex-wrap gap-5">
      {options.map((option, id) => (
        <Card key={option.id} className="md:w-1/3 lg:w-1/4 xl:w-1/5 p-3 gap-y-3 my-8 sm:my-0 shadow-lg">
          <CardHeader>
            <CardTitle>{option.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{option.description}</p>
          </CardContent>
          <CardFooter>
            <Button  className="font-semibold" onClick={() => topicSelection(option.id)}>View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Options;
