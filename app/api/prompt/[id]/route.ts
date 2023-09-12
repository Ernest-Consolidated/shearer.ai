import { connectToDB } from "@utils/database";
import Prompt, { IPrompt } from "@models/prompt";
import { NextRequest } from "next/server";

// GET (read)
export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all Prompts", {
      status: 500,
    });
  }
};

// PATCH (udpate)
export const PATCH = async (req: NextRequest, { params }: any) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById<IPrompt>(params.id).populate(
      "creator"
    );

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;

    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to Update the Prompts", {
      status: 500,
    });
  }
};

// DELETE (delete)
export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted succefully", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete", {
      status: 500,
    });
  }
};
