import { Badge } from "./ui/badge";

export const tagSplit = (tags: string) => {
	return tags.split(",").map((tag) => tag.trim());
};

export default function TagsList({ tags }: { tags: string[] }) {
	return (
		<div className="flex flex-wrap gap-3">
			{tags.map((tag, index) => (
				<Badge variant="outline" key={index}>
					{tag}
				</Badge>
			))}
		</div>
	);
}
