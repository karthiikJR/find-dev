"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createRoomAction } from "./action";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	description: z.string().min(2).max(250),
	githubRepo: z.string().min(2).max(50),
	tags: z.string().min(2).max(50),
});

export function CreateRoomForm() {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			githubRepo: "",
			tags: "",
		},
	});
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// TODO: Send the form data to the server
		const room = await createRoomAction(values);
		toast({
			title: "Room Created",
			description: "Your room was successfully created",
		});
		router.push(`/rooms/${room.id}`);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Room Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Dev Finder" />
							</FormControl>
							<FormDescription>This is your public room name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder="I'm working on a project, come join me!"
								/>
							</FormControl>
							<FormDescription>
								Please describe what you are be coding on.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="githubRepo"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Github Repo</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder="https://github.com/karthiikJR/find-dev"
								/>
							</FormControl>
							<FormDescription>
								Please put a link to the project you are working on.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tags</FormLabel>
							<FormControl>
								<Input
									placeholder="Typescript, NextJS, TailwindCSS"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								List your programming language, frameworks, libraries so people
								can find your content.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
