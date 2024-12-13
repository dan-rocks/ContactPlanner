"use client";

import { useEffect, useRef, useState } from "react";
import WedInput from "../../../utils/ui/WedInput";
import Image from "next/image";
import WedButton from "../../../utils/ui/WedButton";
import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import AddressInput from "../../../utils/ui/AddressInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema, yupValidate } from "../../utils/validation";
import axios, { AxiosError } from "axios";

interface userInfo {
  name: string;
  email: string;
  address: string;
}

interface MapInit {
  center: LngLatLike;
  zoom: number;
}

const mapInit: MapInit = {
  center: [-112.01653207, 41.5054444436],
  zoom: 18,
};

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const accessToken = process.env.MAPBOX_ACCESS!;

const baseInfo = { name: "", email: "", address: "" }

const RSVP = () => {
  const [info, setInfo] = useState<userInfo>(baseInfo);
  const [busy, setBusy] = useState<boolean>(false);
  const { name, email, address } = info;
  const mapRef = useRef<mapboxgl.Map>();
  const mapContainerRef = useRef<HTMLDivElement>();
  const [center, setCenter] = useState<LngLatLike>(mapInit.center);

  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    mapRef.current = new mapboxgl.Map({
      // @ts-expect-error: Type error
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      projection: "globe",
      center: center,
      zoom: mapInit.zoom,
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = undefined;
      }
    };
  }, [center]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: center,
        essential: true,
        duration: 3000,
        animate: true,
      });
    }
  }, [center]);

  const handleInfo = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [type]: e.target.value });
  };

  const handleRetrieve = (res: SearchBoxRetrieveResponse) => {
    console.log(res);
    setCenter([res.features[0].properties.coordinates.longitude, res.features[0].properties.coordinates.latitude]);
    setInfo({ ...info, address: res.features[0].properties.full_address });
  };

  const handleClear = () => {
    setInfo({ ...info, address: "" });
  };

  const handleSubmit = async () => {
    setBusy(true);
    const valid = await yupValidate(loginSchema, info);
    if (valid.error) {
      setBusy(false);
      return toast.error(valid.error);
    }

    try {
      await 
      setInfo(baseInfo)
      toast.success("You're on the RSVP list!")
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error.response?.data.message || "An error occurred!");
      else {
        toast.error("An unexpected error has occurred!")
      }
    }
    setBusy(false);
  };

  return (
    <div className="flex justify-center min-h-screen w-full sm:p-20 p-8 font-[family-name:var(--font-geist-sans)]">
      {darkTheme ? <ToastContainer position="top-right" theme="dark" /> : <ToastContainer position="top-right" />}
      <div className="flex flex-col items-center justify-center w-fit">
        <Image src="/RSVP-NOW.png" alt="RSVP NOW" width={400} height={100} />
        <div className="flex flex-col items-center justify-center sm:w-[75%] w-full my-4">
          <WedInput name="Name" type="name" value={name} onChange={handleInfo("name")} />
          <WedInput name="Email" type="email" value={email} onChange={handleInfo("email")} />
        </div>
        <div id="map-container" className="flex w-full sm:w-[400px] h-96 flex-col mt-2 relative" ref={mapContainerRef as React.LegacyRef<HTMLDivElement>}>
          <div className="flex w-full justify-center">
            <AddressInput name="Address" value={address} onRetrieve={handleRetrieve} onClear={handleClear} mapRef={mapRef.current} />
          </div>
        </div>
        <WedButton name="Submit" disabled={busy} onPress={handleSubmit} />
      </div>
    </div>
  );
};

export default RSVP;