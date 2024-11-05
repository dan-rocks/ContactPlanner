"use client";

import { useEffect, useState } from "react";
import WedInput from "../ui/WedInput";
import Image from "next/image";
import WedButton from "../ui/WedButton";

interface userInfo {
  name: string;
  email: string;
  address: string;
}

const RSVP = () => {
  const [info, setInfo] = useState<userInfo>({ name: "", email: "", address: "" });
  const [busy, setBusy] = useState<boolean>(false)
  const { name, email, address } = info;
  const handleInfo = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [type]: e.target.value });
  };

  return (
    <div className="flex justify-center min-h-screen w-full sm:p-20 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <Image src="/RSVP-NOW.png" alt="RSVP NOW" width={400} height={100} />
        <div className="flex flex-col items-center justify-center sm:w-[75%] w-full my-8">
          <WedInput name="Name" value={name} onChange={handleInfo("name")} />
          <WedInput name="Email" value={email} onChange={handleInfo("email")} />
          <WedInput name="Address" value={address} onChange={handleInfo("address")} />
        </div>
        <WedButton name="Submit" disabled={busy}/>
      </main>
    </div>
  );
};

export default RSVP;
