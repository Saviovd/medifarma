import Map from "@/components/Map";
import Title from "@/components/Title";
import { ImLocation } from "react-icons/im";

export default function Location() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const latitude = 40.712776;
  const longitude = -74.005974;
  const address = "Legenda de teste";

  if (!apiKey) {
    console.error("A chave da API do Google Maps não foi configurada.");
    return null;
  }
  return (
    <div
      className="w-full max-w-[1400px] m-auto md:mt-20 relative"
      id="location"
    >
      <div className="absolute -top-5 left-4 md:left-8 z-10">
        <Title content="Onde estamos" icon={ImLocation} />
      </div>
      <div className="rounded-3xl shadow-lg drop-shadow-2xl overflow-hidden">
        <Map
          apiKey={apiKey}
          latitude={latitude}
          longitude={longitude}
          address={address}
        />
      </div>
    </div>
  );
}
