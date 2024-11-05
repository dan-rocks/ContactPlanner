"use client";

import { useEffect, useState } from "react";
import WedInput from "../ui/WedInput";
import Image from "next/image";
import WedButton from "../ui/WedButton";
import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";

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

  const handleAddress = (e: string): void => {
    setInfo({ ...info, address: e })
  }

  const handleRetrieve = (res: SearchBoxRetrieveResponse) => {
    setInfo({ ...info, address: res.features[0].properties.full_address })
  }

  const handleClear = () => {
    setInfo({ ...info, address: "" })
  }

  useEffect(() => {
    console.log(info)
  }, [info])
  
  const handleSubmit = () => {
    setBusy(true)
    console.log(info)
    console.log("pressed")
    setBusy(false)
  }

  return (
    <div className="flex justify-center min-h-screen w-full sm:p-20 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <Image src="/RSVP-NOW.png" alt="RSVP NOW" width={400} height={100} />
        <div className="flex flex-col items-center justify-center sm:w-[75%] w-full my-8">
          <WedInput name="Name" type="name" value={name} onChange={handleInfo("name")} />
          <WedInput name="Email" type="email" value={email} onChange={handleInfo("email")} />
          <WedInput name="Address" type="address" value={address} onChange={handleAddress} onRetrieve={handleRetrieve} onClear={handleClear} />
        </div>
        <WedButton name="Submit" disabled={busy} onPress={handleSubmit}/>
      </main>
    </div>
  );
};

export default RSVP;