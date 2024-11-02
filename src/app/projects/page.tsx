"use client";

import { Montserrat } from "next/font/google";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import Image from "next/image";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

interface Project {
	name: string;
	description: string;
	repo: string;
	image: string;
	socials: Social[];
}

interface Social {
	icon: string;
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
				icon: "ph:globe",
				color: "hover:text-globe",
				link: "https://amethyst.cxntered.dev"
			},
			{
				icon: "mdi:robot",
				color: "hover:text-robot",
				link: "https://discord.com/oauth2/authorize?client_id=771667974343360552&permissions=264192&scope=bot%20applications.commands"
			},
			{
				icon: "fa6-brands:discord",
				color: "hover:text-discord",
				link: "https://discord.gg/ekxZPZAKUV"
			},
			{
				icon: "fa6-brands:github",
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
				icon: "fa6-brands:github",
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
				icon: "ph:globe",
				color: "hover:text-globe",
				link: "https://q.cxntered.dev"
			},
			{
				icon: "fa6-brands:github",
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
				icon: "ph:globe",
				color: "hover:text-globe",
				link: "https://crown.cxntered.dev"
			},
			{
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/crown"
			}
		]
	},
	{
		name: "RankSpoof",
		description: "A Forge 1.8.9 mod to spoof your Hypixel Rank.",
		repo: "cxntered/RankSpoof",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/RankSpoof"
			}
		]
	},
	{
		name: "TextReplacer",
		description: "A Forge 1.8.9 mod using OneConfig to replace any text.",
		repo: "cxntered/TextReplacer",
		image: "/assets/cxntered.jpg",
		socials: [
			{
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/TextReplacer"
			}
		]
	},
	{
		name: "Hypixel Ban Tracker",
		description: "A simple Discord bot that tracks bans on Hypixel.",
		repo: "cxntered/hypixel-ban-tracker",
		image: "/assets/Hypixel.jpg",
		socials: [
			{
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/hypixel-ban-tracker"
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
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/discord-lootbox-opener"
			}
		]
	}
];

export default function Projects() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-center px-12 py-20">
			<div className="m-2">
				<h2 className={`${montserrat.className} text-lg sm:text-xl font-bold mb-4`}>
					Projects
				</h2>
				<div className="flex flex-wrap justify-center self-stretch gap-3">
					{projects.map((project) => (
						<div className="items-center w-[22rem] md:w-[32rem] lg:w-[28rem] rounded-2xl border border-zinc-600 p-4" key={project.name}>
							<div className="flex flex-row mb-2">
								<Image
									src={project.image}
									alt={project.name}
									width="24"
									height="24"
									className="rounded-full self-center w-4 h-4 sm:w-6 sm:h-6 mr-1.5 sm:mr-2"
								/>
								<h4 className="font-semibold text-gray self-center text-sm sm:text-md">{project.repo}</h4>
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
												<Icon icon={social.icon} className="h-4" />
											</a>
										))}
								</div>
							</div>
						</div>
					))}
					<div className="items-center w-[22rem] md:w-[32rem] lg:w-[28rem] rounded-2xl border border-zinc-600 p-4 flex flex-col justify-center">
						<p className="max-w-sm text-md text-gray mb-1">
							...and many more projects not listed here, such as personal or commissioned projects!
						</p>
						<p className="max-w-sm text-xs text-zinc-400">
							<i>feel free to ask for a commission on Discord! if it&apos;s simple and i&apos;m able to code it, i might do it for free!</i>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
