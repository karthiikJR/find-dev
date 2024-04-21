"use server";

import { getSession } from "@/lib/auth";
import { deleteRoom, getRoom } from "../data-access/room";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId: string) {
	const session = await getSession();
	if (!session) {
		throw new Error("Unauthorized");
	}

	const room = await getRoom(roomId);
	if (room?.userId !== session.user.id) {
		throw new Error("Unauthorized");
	}

	await deleteRoom(roomId);

	revalidatePath("/your-rooms");
}
