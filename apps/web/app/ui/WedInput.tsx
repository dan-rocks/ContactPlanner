import React, { ReactElement } from "react";

interface Props {
  name: string;
  value: string;
  type: string;
  onChange(value: React.ChangeEvent<HTMLInputElement> | string): void;
}

export default function WedInput(props: Props): ReactElement {
  const { name, value, type, onChange } = props;

  return (
    <div className="flex w-full flex-col my-1 font-[family-name:var(--font-geist-sans)]">
      <label htmlFor={name} className="text-black/[.85] dark:text-white/[.85] top-1.5 ml-2">
        {name}
      </label>
      <input
        {...props}
        type={type}
        id={name}
        className="rounded-md w-full h-10 sm:h-12 border border-background-invert bg-inherit focus:bg-white focus:outline-double focus:shadow-lg dark:focus:shadow-slate-300 dark:focus:shadow-lg focus:text-gray-700/[.8] p-3 transition-colors"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
