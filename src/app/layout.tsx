import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import "@/app/styles/globals.css";

const poppins = Poppins({
	weight: ["300", "400", "600", "700", "800", "900"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: {
		default: "cxntered",
		template: "cxntered | %s"
	},
	description: "cxntered's personal website",
	metadataBase: new URL("https://cxntered.dev"),
	openGraph: {
		title: "cxntered",
		description: "cxntered's personal website",
		url: "/",
		siteName: "cxntered.dev",
		images: [
			{
				url: "/assets/cxntered.jpg"
			}
		],
		locale: "en_US",
		type: "website"
	}
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} min-h-screen flex flex-col`}>
				<div className="flex flex-col flex-grow relative z-[1]">
					<Navbar />
					{children}
				</div>
				<Footer />
				<Script src="/assets/oneko.js" />
			</body>
		</html>
	);
}
