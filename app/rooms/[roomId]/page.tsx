import { getRoom } from "@/app/data-access/room";
import TagsList from "@/components/tags-list";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { DevFinderVideo } from "./video-player";
import { tagSplit } from "@/lib/utils";
import { unstable_noStore } from "next/cache";

export default async function RoomPage(props: { params: { roomId: string } }) {
	unstable_noStore();
	const roomId = props.params.roomId;
	const room = await getRoom(roomId);

	if (!room) {
		return <div className="w-fit mx-auto text-4xl">Room not found</div>;
	}

	return (
		<div className="grid grid-cols-4 min-h-screen">
			<div className="col-span-3 p-4 pr-2">
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
					<DevFinderVideo room={room} />
				</div>
			</div>
			<div className="col-span-1 p-4 pl-2">
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
					<h1 className="text-base font-bold">{room.name}</h1>
					{room.githubRepo && (
						<Button asChild>
							<Link
								className="flex items-center gap-2"
								href={room.githubRepo}
								target="_blank"
								rel="noopener noreferrer"
							>
								<GithubIcon />
								Github Project
							</Link>
						</Button>
					)}
					<p className="text-sm text-slate-500">{room.description}</p>

					<TagsList tags={tagSplit(room.tags)} />
				</div>
			</div>
		</div>
	);
}
