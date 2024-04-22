"use client";
import { useState } from "react";

import { ModeToggle } from "@/components/mode-toggle";
import {
	LogInIcon,
	LogOutIcon,
	Notebook,
	TentTreeIcon,
	UserRoundX,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
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
import Image from "next/image";
import Link from "next/link";
import { deleteAccountAction } from "./action";

function AccountDropdown() {
	const session = useSession();
	const isLogged = !!session.data;
	const [open, setOpen] = useState(false);

	return (
		<>
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently remove your
							account and any data your have.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={async () => {
								await deleteAccountAction();
								signOut({ callbackUrl: "/" });
							}}
						>
							Yes, delete my account
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={"ghost"}>
						<Avatar className="mr-2">
							<AvatarImage src={session.data?.user.image ?? ""} alt="@shadcn" />
							<AvatarFallback>
								{session.data?.user?.name ?? "AV"}
							</AvatarFallback>
						</Avatar>
						{session.data?.user?.name ?? "Login"}
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					{isLogged && (
						<>
							<DropdownMenuItem
								className="cursor-pointer"
								onClick={() =>
									signOut({
										callbackUrl: "/",
									})
								}
							>
								<LogOutIcon className="mr-2" /> Sign Out
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link className="flex gap-2 items-center" href="/your-rooms">
									<Notebook />
									Your Rooms
								</Link>
							</DropdownMenuItem>
						</>
					)}
					{!isLogged && (
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => signIn("google")}
						>
							<LogInIcon className="mr-2" />
							Sign In
						</DropdownMenuItem>
					)}
					<DropdownMenuSeparator />
					{isLogged && (
						<DropdownMenuItem
							onClick={() => {
								setOpen(true);
							}}
						>
							<Button asChild variant={"destructive"}>
								<Link className="flex gap-2 items-center" href="/your-rooms">
									<UserRoundX />
									Delete Account
								</Link>
							</Button>
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}

function Header() {
	const session = useSession();
	return (
		<header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
			<nav className="container mx-auto flex justify-between items-center">
				<Link href="/" className="flex gap-2 items-center text-xl">
					<Image src="/logo.png" width="60" height="60" alt="LOGO" />
					Dev Finder
				</Link>
				{session.data && (
					<Button asChild variant={"ghost"}>
						<Link href="/browse" className="flex gap-1 items-center">
							<TentTreeIcon className="w-4 h-4" />
							Rooms
						</Link>
					</Button>
				)}
				<div className="flex sm:gap-5 gap-1 items-center">
					<AccountDropdown />
					<ModeToggle />
				</div>
			</nav>
		</header>
	);
}

export default Header;
