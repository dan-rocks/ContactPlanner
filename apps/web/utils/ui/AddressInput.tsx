import { SearchBoxRetrieveResponse } from "@mapbox/search-js-core";
import { SearchBox } from "@mapbox/search-js-react";
import { Map$1 } from "mapbox-gl";

interface Props {
  name: string;
  value: string;
  mapRef: Map$1 | undefined;
  onRetrieve(value: SearchBoxRetrieveResponse): void;
  onClear(): void;
}

const accessToken = process.env.MAPBOX_ACCESS;

export default function AddressInput(props: Props): JSX.Element {
  const { value, onRetrieve, onClear, mapRef } = props;

  return (
    <div className="flex w-fit flex-col my-1 font-[family-name:var(--font-geist-sans)] absolute">
      <div className="w-full p-4">
        {/* @ts-expect-error: Type error */}
        <SearchBox accessToken={accessToken!} value={value} onRetrieve={onRetrieve} onClear={onClear} ref={mapRef} placeholder="Address" />
      </div>
    </div>
  );
}
