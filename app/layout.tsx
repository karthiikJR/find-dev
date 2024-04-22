import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import Header from "./header";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dev Finder",
	description: "An app to find developers to work on your projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<Providers>
					<Toaster />
					<NextTopLoader />
					<Header />
					<div className="container mx-auto">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
