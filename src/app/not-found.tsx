import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "900", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Not Found"
};

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-row items-center justify-center px-12 py-20">
			<div className="sm:flex">
				<h1
					className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl font-extrabold`}
				>
					404
				</h1>
				<div className="sm:border-l sm:border-gray-200 sm:pl-6 sm:ml-6">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
						Page not found
					</h1>
					<p className="mt-3 text-gray">
						Please check the URL in the address bar and try again.
					</p>
				</div>
			</div>
		</main>
	);
}
