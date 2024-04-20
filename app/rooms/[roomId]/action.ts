"use server";

import { StreamChat } from "stream-chat";

export async function generateTokenAction(id: string) {
	const api_key = process.env.NEXT_PUBLIC_STREAM_API!;
	const api_secret = process.env.NEXT_PUBLIC_STREAM_SECRET;

	const serverClient = StreamChat.getInstance(api_key, api_secret);
	const token = serverClient.createToken(id);

	return token;
}
