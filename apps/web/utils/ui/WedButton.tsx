interface Props {
	name: string;
	disabled: boolean;
	onPress(): void;
}

export default function WedButton({ name, disabled, onPress, ...rest }: Props & React.ComponentProps<"input">): JSX.Element {
	return (
		<div className="flex w-full justify-center h-10 sm:h-12 mt-24">
			<input
				{...rest}
				type="button"
				value={name}
				className="bg-white rounded-full w-[50%] h-10 sm:h-12 focus:outline-none text-background hover:text-white text-background-invert hover:bg-inherit hover:border transition-colors duration-250"
				id={name}
				disabled={disabled}
				onClick={() => onPress()}
			/>
		</div>
	);
}