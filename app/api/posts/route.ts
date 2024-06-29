import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "../../../utils/db";


export async function GET() {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    
    const post = await db.postTable.findMany();

    return NextResponse.json({
        post
    })
}