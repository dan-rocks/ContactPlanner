import React from 'react'

interface Props {
  name: string;
  value: string | number;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

export default function WedInput(props: Props): JSX.Element {
  const { name, value } = props

  return (
    <div className="flex w-full font-[family-name:var(--font-geist-sans)] mb-4 flex-col">
      <label htmlFor={name} className='text-black/[.85] dark:text-white/[.85] top-1.5 ml-2'>{name}</label>
      <input {...props} type='text' id={name} className='rounded-md  w-full h-10 sm:h-12 border border-background-invert bg-inherit focus:bg-white focus:outline-double focus:shadow-lg dark:focus:shadow-slate-300 dark:focus:shadow-lg focus:text-gray-700/[.8] p-3 transition-colors' value={value} />
    </div>
  )
}