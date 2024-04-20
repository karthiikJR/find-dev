"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogInIcon, LogOutIcon } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function AccountDropdown() {
	const session = useSession();

	const isLoggedIn = !!session.data;

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
				{session.data && (
					<DropdownMenuItem
						onClick={() =>
							signOut({
								callbackUrl: "/",
							})
						}
					>
						<LogOutIcon className="mr-2" /> Sign Out
					</DropdownMenuItem>
				)}
				{!session.data && (
					<DropdownMenuItem onClick={() => signIn("google")}>
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
		<header className="px-4 bg-gray-200 py-2 dark:bg-gray-900">
			<nav className=" flex justify-between items-center">
				<Link href="/" className="flex gap-2 items-center text-xl">
					<Image src="/logo.png" width="60" height="60" alt="LOGO" />
					Dev Finder
				</Link>
				<div className="flex sm:gap-5 gap-1 items-center">
					<AccountDropdown />
					<ModeToggle />
				</div>
			</nav>
		</header>
	);
}

export default Header;
