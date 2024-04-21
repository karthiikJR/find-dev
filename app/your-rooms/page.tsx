import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getUserRooms } from "../data-access/room";
import { UserRoomCard } from "./user-room-card";
import { unstable_noStore } from "next/cache";

export default async function YourRoomsPage() {
	unstable_noStore();
	const rooms = await getUserRooms();
	return (
		<main className="min-h-screen p-16">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-medium">Your Rooms!</h1>
				<Button asChild>
					<Link href="/create-room">Create Room</Link>
				</Button>
			</div>
			<div className="max-w-4xl flex flex-col gap-4 mx-auto">
				{rooms.map((room) => (
					<UserRoomCard key={room.id} room={room}></UserRoomCard>
				))}
			</div>
		</main>
	);
}
