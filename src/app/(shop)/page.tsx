import Image from "next/image";
import { titleFont } from "@/config/font";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola Mundo</h1>
    </div>
  );
}
