import { createClient } from "redis";
import dotenv from 'dotenv';

dotenv.config();

const client = await createClient({ url: process.env.REDIS_URL })
  .on("error", (error) => console.log(error))
  .connect();

export async function getKey(key) {
  return await client.get(key);
}