import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

const uri: string = process.env.MONGODB_URI || "";

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "shearer-ai",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error: any) {
    console.error(error);
  }
};
