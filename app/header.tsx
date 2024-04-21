"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { LogInIcon, LogOutIcon, Notebook, TentTreeIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

function AccountDropdown() {
	const session = useSession();
	const isLogged = !!session.data;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"ghost"}>
					<Avatar className="mr-2">
						<AvatarImage src={session.data?.user.image ?? ""} alt="@shadcn" />
						<AvatarFallback>{session.data?.user?.name ?? "AV"}</AvatarFallback>
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
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function Header() {
	const session = useSession();
	return (
		<header className="px-4 bg-sky-100 py-2 dark:bg-slate-800 relative z-10">
			<nav className=" flex justify-between items-center">
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
