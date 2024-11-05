import React, { ReactElement } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";

interface Props {
  name: string;
  value: string;
  type: string;
  onChange?(value: React.ChangeEvent<HTMLInputElement> | string): void;
  onRetrieve?(value: SearchBoxRetrieveResponse): void;
  onClear?(): void;
}

const accessToken = process.env.MAPBOX_ACCESS;
console.log(accessToken);

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const theme = isDarkMode ? {
  variables: {
    borderRadius: "6px",
    border: '#FFF',
    unit: '18px',
    colorBackground: '#FFF',
    colorBackgroundActive: "white",
    colorText: "",
  }
} : {
  variables: {

  }
}

export default function WedInput(props: Props): ReactElement {
  const { name, value, type, onChange, onRetrieve, onClear } = props;

  return (
    <div className="flex w-full font-[family-name:var(--font-geist-sans)] mb-4 flex-col">
      {type == "address" ? (
        <div className="">
          {/* @ts-expect-error: Type error */}
          <SearchBox accessToken={accessToken!} value={value} onChange={onChange} onRetrieve={onRetrieve} onClear={onClear} theme={theme} placeholder="Address" />
        </div>
      ) : (
        <>
          <label htmlFor={name} className="text-black/[.85] dark:text-white/[.85] top-1.5 ml-2">
            {name}
          </label>
          <input
            {...props}
            type={type}
            id={name}
            className="rounded-md  w-full h-10 sm:h-12 border border-background-invert bg-inherit focus:bg-white focus:outline-double focus:shadow-lg dark:focus:shadow-slate-300 dark:focus:shadow-lg focus:text-gray-700/[.8] p-3 transition-colors"
            value={value}
          />
        </>
      )}
    </div>
  );
}
