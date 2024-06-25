import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
        <SignedOut>
            <SignIn routing="hash"/>
        </SignedOut>
      <SignedIn>Protected children</SignedIn>
    </div>
  );
};

export default page;
