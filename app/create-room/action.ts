"use server";

import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function CreateRoomAction(roomData: Omit<Room, "id" | "userId">) {
	const session = await getSession();
	const roomDataWithLowercaseTags = {
		...roomData,
		tags: roomData.tags.toLowerCase(),
	};
	if (!session) {
		throw new Error("You must be logged in to create a room");
	}
	await db
		.insert(room)
		.values({ ...roomDataWithLowercaseTags, userId: session.user.id });

	revalidatePath("/");
}
