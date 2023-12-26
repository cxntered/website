"use client";

import { Montserrat } from "next/font/google";
import { Icon } from "@iconify/react";
import Image from "next/image";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const projects = [
	{
		name: "Amethyst",
		description:
			"Amethyst is a bot made for the Hypixel Network, allowing you to track players' stats on different Hypixel gamemodes and a lot more.",
		image: "/assets/Amethyst.png",
		socials: [
			{
				icon: "ph:globe",
				color: "hover:text-globe",
				link: "https://amethystbot.tech"
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
		name: "🐷 Technoblade Crown Adder 👑",
		description: "A simple website for adding Technoblade's crown to any person's skin.",
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
		name: "Hypixel Ban Tracker",
		description: "A simple Discord bot that tracks bans on Hypixel.",
		image: "/assets/Hypixel.jpg",
		socials: [
			{
				icon: "fa6-brands:github",
				color: "hover:text-white",
				link: "https://github.com/cxntered/hypixel-ban-tracker"
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
				{projects.map((project) => (
					<div className="flex items-center mb-12" key={project.name}>
						<Image
							src={project.image}
							alt={project.name}
							width="80"
							height="80"
							className="rounded-full self-start w-14 h-14 sm:w-20 sm:h-20 mr-3 sm:mr-5"
						/>
						<div className="text-left">
							<h3 className="text-lg sm:text-xl font-bold">{project.name}</h3>
							<p className="max-w-sm text-sm sm:text-base text-gray">
								{project.description}
							</p>
							<div className="flex">
								{project.socials &&
									project.socials.map((social) => (
										<a
											href={social.link}
											key={social.link}
											className={`flex my-2 mr-4 w-10 h-10 rounded-full items-center justify-center bg-primary ${social.color} transition duration-200 shadow`}
										>
											<Icon icon={social.icon} className="h-4" />
										</a>
									))}
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
