"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Projects", href: "/projects" }
];

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(" ");
};

export default function Navbar() {
	const pathname = usePathname();

	return (
		<Disclosure as="nav" className="w-full bg-primary">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="flex flex-1  items-stretch justify-start">
								<Link href="/" className="flex flex-shrink-0 items-center">
									<Image
										src="/assets/cxntered.jpg"
										alt="cxntered's profile picture"
										width="32"
										height="32"
										className="rounded-full h-8 mr-2"
									/>
									<span className="self-center text-large whitespace-nowrap dark:text-white">
										cxntered
									</span>
								</Link>
							</div>
							<div className="inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-hover hover:text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<X className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Menu className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={classNames(
												pathname === item.href
													? "bg-current text-white"
													: "text-gray-300 hover:bg-hover hover:text-white transition duration-200",
												"rounded-md px-3 py-2 text-sm font-medium"
											)}
											aria-current={
												pathname === item.href ? "page" : undefined
											}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-50"
						enterFrom="transform opacity-0"
						enterTo="transform opacity-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100"
						leaveTo="transform opacity-0"
					>
						<Disclosure.Panel className="sm:hidden">
							{({ close }) => (
								<div className="space-y-1 px-2 pb-3 pt-2">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={classNames(
												pathname === item.href
													? "bg-current text-white"
													: "text-gray-300 hover:bg-hover hover:text-white transition duration-200",
												"block rounded-md px-3 py-2 text-base font-medium"
											)}
											aria-current={
												pathname === item.href ? "page" : undefined
											}
											onClick={() => close()}
										>
											{item.name}
										</Link>
									))}
								</div>
							)}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	);
}
