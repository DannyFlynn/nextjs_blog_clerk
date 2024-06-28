"use client"
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "../ui/button";
import { getPosts } from "@/utils/actions";


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

type Posts = {
  id: string;
  language: string;
  title: string;
  content: string;
  like: Number;
  unlike: Number;
  User: string;
}

const Topic = () => {
  
  const [posts, setPosts] = useState<Posts[]>([])

  useEffect(() => {

    const fetchPost =  async () => {
          const posts = await getPosts()
          if(posts){
          console.log(posts)
          setPosts(posts)
          }
    }

    fetchPost()

  }, [])

    const [fullContent, setFullContent] = useState<boolean>(false)

  return (
<div className="md:w-2/3 min-h-20  mt-5 border-2 rounded-md p-4 relative">
        {posts.map((pos,id) => (
          <h2>{pos.title} <p>{pos.User}</p></h2>
        ))}
        {posts.map((post, id) => (
        <div>
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <div className="w-full text-wrap">
        <ReactMarkdown>{fullContent ? post.content : post.content.substring(0, Math.floor(post.content.length / 3))}</ReactMarkdown>
        <div className="relative border-t-2 w-full flex py-4">
            <button className="text-4xl">👍</button>
            <button className="ml-3 text-4xl">👎</button>
            <button className="ml-3 text-4xl">🗣️</button>
        </div>
        </div>
        <Button className="absolute bottom-3 right-4" onClick={() => setFullContent(!fullContent)}>{fullContent ? "View less" : "View more"}</Button>
        </div>
        ))}
      </div>
  )
}

export default Topic
