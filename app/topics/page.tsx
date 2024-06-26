import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Options from "@/components/topics/Options";

const Topics = async () => {
  const user = await currentUser();
  
  //console.log(user ? user : "no user");
  if (!user) {
    redirect("/");
  }

  return (
    <div className="mt-14 p-4">
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
      <SignedIn>
        <Options />
      </SignedIn>
    </div>
  );
};

export default Topics;
