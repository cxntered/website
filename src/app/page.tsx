import { Montserrat } from "next/font/google";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import Twitter from "./icons/Twitter";
import Link from "next/link";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-center px-12 py-20">
			<div className="m-2">
				<h1 className={`${montserrat.className} text-3xl md:text-5xl sm:text-4xl`}>
					hey, i&apos;m cxntered! 👋
				</h1>
				<br />
				<p className="text-md sm:text-lg text-gray">i play games</p>
				<p className="text-md sm:text-lg text-gray">i am also a developer! :o</p>
			</div>
			<div className="flex m-2">
				<Link
					href="https://discord.com/users/638695599893643274"
					className="flex mx-2 w-10 h-10 rounded-full items-center justify-center bg-primary hover:text-discord transition duration-200 shadow"
				>
					<SiDiscord className="h-4" />
				</Link>
				<Link
					href="https://github.com/cxntered"
					className="flex mx-2 w-10 h-10 rounded-full items-center justify-center bg-primary shadow"
				>
					<SiGithub className="h-4" />
				</Link>
				<Link
					href="https://twitter.com/cxntered"
					className="flex mx-2 w-10 h-10 rounded-full items-center justify-center bg-primary hover:text-twitter transition duration-200 shadow"
				>
					<Twitter className="h-4" />
				</Link>
			</div>
		</main>
	);
}
