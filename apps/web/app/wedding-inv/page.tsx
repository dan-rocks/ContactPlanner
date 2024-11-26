"use client";

import React from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const WeddingInv: React.FC = () => {
	const oh = () => {
		const sound = new Audio("/oh.mp3");
		setTimeout(() => sound.play(), 1500);

		for (let i = 0; i <= 10; i++) {
			setTimeout(() => {
				toast.success("Virus downloaded!");
			}, i * 150);
		}
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[90vh] sm:min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			{darkTheme ? <ToastContainer theme="dark" /> : <ToastContainer />}
			<main className="flex flex-col gap-8 row-start-2 items-center min-h-full">
				<Image className="w-full h-auto" src="/STEADMAN-PARTY.png" alt="Next.js logo" width={280} height={38} priority />
				<div className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
					<div className="mb-2">Welcome to our wedding!</div>
					<div>If you clicked on this you are a real friend.</div>
				</div>

				<div className="flex flex-row gap-4 justify-between items-center w-full">
					<a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="wedding-inv/RSVP/" rel="noopener noreferrer">
						<Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
						RSVP
					</a>
					<a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-112" href="wedding-inv/VENMO" rel="noopener noreferrer">
						VENMO
					</a>
				</div>
				<div className="w-full flex justify-center">
					<a className="flex border-black/[.08] items-center justify-center dark:border-white/[.145] border rounded-full border-solid transition-colors w-full h-10 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base sm:h-12" href="https://www.amazon.com/wedding/registry/BRA7NQUI9B6?ref=wr_search_page_result_8" target="_blank">
						Registry
					</a>
				</div>
			</main>

			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Page
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					rel="noopener noreferrer"
					onClick={e => {
						e.preventDefault();
						oh();
					}}
				>
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Useless button
				</a>
				<a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="../" target="_blank" rel="noopener noreferrer">
					<Image aria-hidden src="/calendar.svg" alt="Globe icon" width={20} height={20} />
					ContactPlanner! →
				</a>
			</footer>
		</div>
	);
};

export default WeddingInv;
