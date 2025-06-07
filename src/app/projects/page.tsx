import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { ForwardRefExoticComponent, Fragment } from "react";
import { Montserrat } from "next/font/google";
import { Globe, Bot } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Modrinth from "../icons/Modrinth";

export const metadata: Metadata = {
	title: "Projects"
};

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

interface Project {
	name: string;
	description: string;
	repo: string;
	image: string;
	socials: Social[];
}

interface Social {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: ForwardRefExoticComponent<any>;
	color: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "Amethyst",
		description: "A Discord bot that allows you to track Hypixel stats.",
		repo: "amethystbot",
		image: "/assets/Amethyst.png",
		socials: [
			{
				icon: Globe,
				color: "hover:text-globe",
				link: "https://amethyst.cxntered.dev"
			},
			{
				icon: Bot,
				color: "hover:text-robot",
				link: "https://discord.com/oauth2/authorize?client_id=771667974343360552&permissions=264192&scope=bot%20applications.commands"
			},
			{
				icon: SiDiscord,
				color: "hover:text-discord",
				link: "https://discord.gg/ekxZPZAKUV"
			},
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/amethystbot"
			}
		]
	},
	{
		name: "Website",
		description: "cxntered's personal website. \n(psst, fun fact: you're on it right now!)",
		repo: "cxntered/website",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/website"
			}
		]
	},
	{
		name: "Quartz",
		description: "A link shortener built with Next.js & Prisma.",
		repo: "cxntered/quartz",
		image: "/assets/Quartz.png",
		socials: [
			{
				icon: Globe,
				color: "hover:text-globe",
				link: "https://q.cxntered.dev"
			},
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/quartz"
			}
		]
	},
	{
		name: "🐷 Technoblade Crown Adder 👑",
		description: "A simple website for adding Technoblade's crown to any person's skin.",
		repo: "cxntered/crown",
		image: "/assets/Technoblade.png",
		socials: [
			{
				icon: Globe,
				color: "hover:text-globe",
				link: "https://crown.cxntered.dev"
			},
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/crown"
			}
		]
	},
	{
		name: "RankSpoof",
		description: "A Forge 1.8.9 mod to spoof your Hypixel Rank.",
		repo: "cxntered/RankSpoof",
		image: "/assets/RankSpoof.png",
		socials: [
			{
				icon: Modrinth,
				color: "hover:text-modrinth",
				link: "https://modrinth.com/mod/rankspoof"
			},
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/RankSpoof"
			}
		]
	},
	{
		name: "TextReplacer",
		description: "A Forge 1.8.9 mod using OneConfig to replace any text.",
		repo: "cxntered/TextReplacer",
		image: "/assets/TextReplacer.png",
		socials: [
			{
				icon: Modrinth,
				color: "hover:text-modrinth",
				link: "https://modrinth.com/mod/textreplacer"
			},
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/TextReplacer"
			}
		]
	},
	{
		name: "StarHUD",
		description: "Display fancy HUDS in your game. A backport of StarHUD for Fabric 1.20+ to Forge 1.8.9 using OneConfig.",
		repo: "cxntered/StarHUD",
		image: "/assets/StarHUD.png",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/StarHUD"
			}
		]
	},
	{
		name: "Keyword Bot",
		description: "A Discord bot to search through videos' metadata & tags to find keywords. Originally made for 2imepass.",
		repo: "cxntered/keyword-bot",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/keyword-bot"
			}
		]
	},
	{
		name: "Freelook",
		description: "A Forge 1.8.9 mod that allows you freely look around without moving your head.",
		repo: "cxntered/Freelook",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/Freelook"
			}
		]
	},
	{
		name: "fat-ass-editor",
		description: "Free and Trivial Advanced SubStation Subtitles Editor. \n(originally made for converting anime subtitles :3)",
		repo: "cxntered/fat-ass-editor",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/fat-ass-editor"
			}
		]
	},
	{
		name: "Discord Lootbox Opener",
		description: "A Python script to automatically open Discord lootboxes.",
		repo: "cxntered/discord-lootbox-opener",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: SiGithub,
				color: "hover:text-white",
				link: "https://github.com/cxntered/discord-lootbox-opener"
			}
		]
	}
];

export default function Projects() {
	return (
		<main className="flex flex-col flex-grow items-center justify-center text-center px-12 py-5">
			<div className="m-2">
				<h2 className={`${montserrat.className} text-lg sm:text-xl font-bold mb-4`}>
					Projects
				</h2>
				<div className="flex flex-wrap justify-center self-stretch gap-3">
					{projects.map((project) => (
						<div
							className="items-center w-[22rem] md:w-[32rem] lg:w-[28rem] rounded-2xl border border-zinc-600 p-4"
							key={project.name}
						>
							<div className="flex flex-row mb-2">
								<Image
									src={project.image}
									alt={project.name}
									width="24"
									height="24"
									loading="eager"
									className="rounded-full self-center w-4 h-4 sm:w-6 sm:h-6 mr-1.5 sm:mr-2"
								/>
								<h4 className="font-semibold text-gray self-center text-sm sm:text-md">
									{project.repo}
								</h4>
							</div>

							<div className="text-left flex flex-col justify-between h-[80%]">
								<div>
									<h3 className="text-lg font-bold">{project.name}</h3>
									<p className="max-w-sm text-sm text-gray">
										{project.description.split("\n").map((line, index) => (
											<Fragment key={index}>
												{line}
												<br />
											</Fragment>
										))}
									</p>
								</div>
								<div className="flex mt-1 sm:mt-2">
									{project.socials &&
										project.socials.map((social) => (
											<a
												href={social.link}
												key={social.link}
												className={`flex mr-3 sm:mr-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full items-center justify-center bg-primary ${social.color} transition duration-200 shadow`}
											>
												<social.icon className="h-4" />
											</a>
										))}
								</div>
							</div>
						</div>
					))}
					<div className="items-center w-[22rem] md:w-[32rem] lg:w-[28rem] rounded-2xl border border-zinc-600 p-4 flex flex-col justify-center">
						<p className="max-w-sm text-sm text-gray mb-1">
							...and many more projects not listed here, such as personal or
							commissioned projects!
						</p>
						<p className="max-w-sm text-xs text-zinc-400">
							<i>
								feel free to ask for a commission on Discord! if it&apos;s simple
								and i&apos;m able to code it, i might do it for free!
							</i>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
