import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "minooxye@amz",
	description: "amz related web for minooxye",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div id="app-container">
					<div
						id="topbar"
						className="h-14 sticky top-0 z-50 bg-[#0b1416] border-b border-[#ffffff33] px-4 flex items-center justify-start"
					></div>
					<div
						id="content-container"
						className="grid grid-cols-[272px_1fr] bg-[#0b1416]"
					>
						<div
							id="left-aside"
							className="h-[calc(100vh-3.5rem)] overflow-y-auto sticky top-14 border-r border-[#ffffff33] pl-[6px] pr-3 py-4 sb"
						></div>
						<main id="main-content">{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
