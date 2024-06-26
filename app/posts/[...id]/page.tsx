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
import ReactMarkdown from 'react-markdown';

type Params = {
    id: string
}

const post = {
    title: "Send a Form in Next.js",
    user: "Danny Harris",
    content: `
      To send a form in Next.js, you can use the following code snippet:

      \`\`\`jsx
      import { useState } from 'react';

      const MyForm = () => {
        const [formData, setFormData] = useState({ name: '', email: '' });

        const handleSubmit = async (event) => {
          event.preventDefault();
          const response = await fetch('/api/form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          if (response.ok) {
            alert('Form submitted successfully');
          } else {
            alert('Form submission failed');
          }
        };

        return (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        );
      };

      export default MyForm;
      \`\`\`
    `
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


const TopicChosen = async ({params} : {params : Params}) => {

    const user = await currentUser();
  if(!user){
    redirect("/")
   //console.log(user)
  }

  return (
    <div className='mt-14 w-full md:flex justify-end p-4 relative'>
        <SignedIn>
      {/* HELLO {params.id} */}
      
      <div className="hidden md:flex flex-col md:w-1/3 md:h-2/3 justify-around absolute top-5 left-0">
        {options.map(option => (
            <p key={option.id} className="mx-10 font-semibold my-12 underline"><a href={`/posts/${option.title}`}>{option.title}</a></p>
        ))}
      </div>
      <div className="md:w-2/3 min-h-20  mt-5 border-2 rounded-md p-4 relative">
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <div className="w-full text-wrap">
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <div className="relative border-t-2 w-full flex py-4">
            <button className="text-4xl">👍</button>
            <button className="ml-3 text-4xl">👎</button>
            <button className="ml-3 text-4xl">🗣️</button>
        </div>
        </div>
        {/* <p className="font-semibold text-lg">{post.content}</p> */}
      </div>
        </SignedIn>
    </div>
  )
}

export default TopicChosen;
