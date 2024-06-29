"use server"
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



export const getPosts = async () => {
  //console.log(db);

  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    const post = await db.postTable.findMany();
    //const post = await db.testProfile.findMany();

    return post;
  } catch (error) {
    console.log(error)
  }
};
