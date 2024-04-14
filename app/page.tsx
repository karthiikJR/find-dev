import { db } from "@/db";

export default async function Home() {
	const items = await db.query.testing.findMany();
	return (
		<main className="flex h-full flex-col gap-10 items-center p-24">
			<h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
			{items.map((item) => (
				<div key={item.id}>
					<p className="text-xs">{item.id}</p>
					<h2 className="text-xl">{item.name}</h2>
				</div>
			))}
		</main>
	);
}
