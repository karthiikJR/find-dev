import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getRooms } from "../data-access/room";
import { SearchBar } from "./search-bar";
import { RoomCard } from "./room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Home({
	searchParams,
}: {
	searchParams: { search: string };
}) {
	unstable_noStore();
	const rooms = await getRooms(searchParams.search);
	return (
		<main className="min-h-screen p-16">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-medium">Find Dev Rooms!</h1>
				<Button asChild>
					<Link href="/create-room">Create Room</Link>
				</Button>
			</div>
			<div className="w-full mb-12 flex justify-center">
				<SearchBar />
			</div>
			<div className="max-w-4xl flex flex-col gap-4 mx-auto">
				{rooms.map((room) => (
					<RoomCard key={room.id} room={room}></RoomCard>
				))}
			</div>
			{rooms.length === 0 && (
				<div className="flex flex-col gap-4 justify-center items-center mt-24">
					<Image
						className="opacity-50"
						src="/no-data.svg"
						width="200"
						height="200"
						alt="no data image"
					/>

					<h2 className="text-2xl">No Rooms Yet!</h2>

					<Button asChild>
						<Link href="/create-room">Create Room</Link>
					</Button>
				</div>
			)}
		</main>
	);
}
