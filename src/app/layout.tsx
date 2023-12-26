import "@/app/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
	weight: ["300", "400", "600", "700", "800", "900"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "cxntered",
	description: "cxntered's personal website",
	openGraph: {
		title: "cxntered.dev",
		description: "cxntered's personal website",
		url: "https://cxntered.dev/",
		siteName: "cxntered",
		images: [
			{
				url: "https://cxntered.dev/assets/cxntered.jpg"
			}
		],
		locale: "en_US",
		type: "website"
	}
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
