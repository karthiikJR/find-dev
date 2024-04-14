"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
	const session = useSession();
	return (
		<header>
			<div>
				{session.data ? (
					<Button onClick={() => signOut()}>signOut</Button>
				) : (
					<Button onClick={() => signIn("google")}>signIn</Button>
				)}
				<ModeToggle />
				{session.data?.user?.name}
			</div>
		</header>
	);
}

export default Header;
