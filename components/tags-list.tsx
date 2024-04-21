"use client";

import { useRouter } from "next/navigation";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function TagsList({ tags }: { tags: string[] }) {
	const router = useRouter();
	return (
		<div className="flex flex-wrap gap-3">
			{tags.map((tag) => (
				<button
					className={cn(badgeVariants({ variant: "outline" }))}
					key={tag}
					onClick={() => {
						router.push(`/browse?search=${tag}`);
					}}
				>
					{tag}
				</button>
			))}
		</div>
	);
}
