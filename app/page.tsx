import { db } from "@/db";

export default async function Home() {
	const rooms = await db.query.room.findMany();
	return (
		<main className="flex h-full flex-col gap-10 items-center p-24">
			<h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
			{rooms.map((room) => (
				<div key={room.id}>
					<p className="text-xs">{room.name}</p>
				</div>
			))}
		</main>
	);
}
