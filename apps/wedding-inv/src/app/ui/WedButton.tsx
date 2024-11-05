interface Props {
  name: string;
  disabled: boolean;
  onPress(): void;
}

export default function WedButton({ name, disabled, onPress }: Props): JSX.Element {
  return (
    <div className="flex w-full justify-center h-10 sm:h-12">
      <input
        type="button"
        value={name}
        className="bg-white rounded-full w-[50%] h-full focus:outline-double text-background hover:text-white text-background-invert hover:bg-inherit hover:border transition-colors duration-250"
        id={name}
        disabled={disabled}
        onClick={() => onPress()}
      />
    </div>
  );
}
