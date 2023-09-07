"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

interface IPost {
  prompt: string;
  tag: string;
}

const CreatePrompt = () => {
  const { data: session } = useSession() as any;
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<IPost>({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    console.log("post", { post });

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
