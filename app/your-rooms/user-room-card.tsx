"use client";

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
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Room } from "@/db/schema";
import { tagSplit } from "@/lib/utils";
import { GithubIcon, PencilIcon, TrashIcon } from "lucide-react";
import { deleteRoomAction } from "./action";

export function UserRoomCard({ room }: { room: Room }) {
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
				<div className="w-full flex justify-between items-center">
					<Button asChild>
						<Link href={`/rooms/${room.id}`}>Join Room</Link>
					</Button>
					<div className="flex gap-2">
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button variant={"destructive"}>
									<TrashIcon className="w-4 h-4" />
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will permanently remove
										the room and the data associated with it.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction
										onClick={() => {
											deleteRoomAction(room.id);
										}}
									>
										Yes, delete
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
						<Button asChild variant={"secondary"}>
							<Link href={`/edit-room/${room.id}`}>
								<PencilIcon className="w-4 h-4" />
							</Link>
						</Button>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
