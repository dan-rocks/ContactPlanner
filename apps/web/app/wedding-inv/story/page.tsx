import Image from "next/image";

const bekahPerspective = "Bekah was thinking of ways to find her match when she decided to start talking"
const danPerspective = "A friend Dan knew from his mission invited him to a party on USU campus being thrown by the school. Dan was told there would be free food, so logically he went."
const danPerspective2 = "Dan quickly realized there was no free food and he had been deceived. As he began wondering if he should go home and cook something, a dance started. To his surprise, a shorter brunette girl accompanied by a taller blonde girl asked him and his friends if they would like to dance with them. Not wanting to be rude, Dan accepted on behalf of his friends (who may not have been so keen on dancing)."
const danPerspective3 = 'After a while, Dan, having no idea how to dance, decides it is about time to eat. He told the girls that he was going back to his apartment to make some "pasta" (Dan is terrible at cooking) and they could come if they wanted. To his surprise, they followed!'
const danPerspective4 = 'They ended up playing games and hanging out more that week. That is how Dan met Bekah.'
const danPerspective5 = ''

const Page = (): JSX.Element => {
	return (
		<div className="flex justify-center min-h-screen w-full sm:p-20 p-8 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col w-full items-center text-wrap">
				<Image src="/OUR-STORY.png" alt="Vercel logomark" width={400} height={20} />
                <div className="flex w-full flex-col sm:flex-row p-4">
                    <div className="flex w-full h-full flex-col items-center">
                        <div className="flex justify-center h-auto w-[50%] text-center py-2">According to Bekah</div>
                        <div className="w-[50%] h-auto text-wrap py-2 text-justify">{bekahPerspective}</div>
                    </div>
                    <div className="flex w-full h-full flex-col items-center ">
                        <div className="flex justify-center h-auto w-[50%] text-center py-2">According to Dan</div>
                        <div className="w-[50%] h-auto text-wrap py-2 text-justify">{danPerspective}</div>
                        <div className="w-[50%] h-auto text-wrap py-2 text-justify">{danPerspective2}</div>
                        <div className="w-[50%] h-auto text-wrap py-2 text-justify">{danPerspective3}</div>
                        <div className="w-[50%] h-auto text-wrap py-2 text-justify">{danPerspective4}</div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Page;
