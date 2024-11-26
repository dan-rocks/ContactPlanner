"use client";

import WedButton from "@/app/ui/WedButton";
import Image from "next/image";
import { useState } from "react";

const Venmo = () => {
	const [copied, setCopied] = useState(false);
	const textToCopy = "This is the text to copy.";

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<main className="flex justify-center min-h-screen w-full sm:p-20 p-8 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col items-center justify-center sm:w-[30%]">
				<div className="flex justify-center m-8 font-[family-name:var(--font-geist-mono)] text-center">If you would prefer to give money rather than get something from the registry, feel free to donate through Venmo or Zelle!</div>
				{/* Container for images side by side */}
				<div className="flex flex-column justify-center gap-2">
					<div>
                        {/* Card */}
						<div className="bg-white rounded-lg">
							<Image className="h-auto" src="/BEKAH-VENMO.png" alt="Next.js logo" width={280} height={38} priority />
						</div>
						<WedButton className="" name={"Copy to clipboard"} disabled={copied} onPress={handleCopy}></WedButton>
						<p>{textToCopy}</p>
					</div>
					<Image className="w-full h-auto" src="/STEADMAN-PARTY.png" alt="Next.js logo" width={280} height={38} priority />
				</div>
			</div>
		</main>
	);
};

export default Venmo;
