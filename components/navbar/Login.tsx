import { Button } from '../ui/button';
import { SignedIn, SignedOut, SignIn, UserButton, SignInButton  } from "@clerk/nextjs";

const Login = () => {
  return (
    <>
    <SignedOut>
  
    <SignInButton>
      <Button variant="outline" className='mr-6'>Login</Button>
      </SignInButton>

    </SignedOut>
    <SignedIn>
      {/* could have show name in user button but didnt look right on dark mode */}
      <div className='mr-6'>
      <UserButton />
      </div>
    </SignedIn>
    </>
  )
}

export default Login
