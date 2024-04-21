import Link from "next/link";

import TagsList from "@/components/tags-list";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { tagSplit } from "@/lib/utils";
import { GithubIcon } from "lucide-react";

export function RoomCard({ room }: { room: Room }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{room.name}</CardTitle>
				<CardDescription>{room.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<TagsList tags={tagSplit(room.tags)} />
				{room.githubRepo && (
					<Link
						className="flex items-center gap-2"
						href={room.githubRepo}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon />
						Github Project
					</Link>
				)}
			</CardContent>
			<CardFooter>
				<Button asChild>
					<Link href={`/rooms/${room.id}`}>Join Room</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
