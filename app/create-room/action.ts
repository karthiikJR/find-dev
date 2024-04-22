"use server";

import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { createRoom } from "../data-access/room";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
	const session = await getSession();
	const roomDataWithLowercaseTags = {
		...roomData,
		tags: roomData.tags.toLowerCase(),
	};
	if (!session) {
		throw new Error("You must be logged in to create a room");
	}

	const room = await createRoom(roomDataWithLowercaseTags, session.user.id);

	revalidatePath("/");

	return room;
}
