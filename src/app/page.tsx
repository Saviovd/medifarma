import Image from "next/image";
import Painel from "@/components/Painel";
import About from "@/components/About";
import CardList from "@/components/CardList";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)] p-4 md:p-8 pt-40 relative overflow-hidden">
      <div className="bg-dark-blue backdrop-blur   p-6 rounded-3xl bg-opacity-65 w-full md:m-auto max-w-[1400px] z-20 flex items-center">
        <Image
          className="object-contain"
          src="/POSITIVO.png"
          alt="MediFarma logo"
          width={180}
          height={38}
          priority
        />
        <nav>
          <ul className="flex">
            <li>
              <a href="#about">Quem somos</a>
            </li>
            <li>
              <a href="#location">Onde estamos</a>
            </li>
            <li>
              <a href="#contact">Nossas redes</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex flex-col gap-10 md:gap-0 row-start-2 items-start justify-start sm:items-start mt-5 pb-20 lg:pb-48">
        <div className="bg-[url('/img/PATTERN02.svg')] bg-no-repeat bg-bottom bg-cover w-screen h-[490px] absolute top-0 left-0 -z-[1]"></div>
        <Painel />
        <About />
        <CardList />
        <Location />
        <Contact />
        <div className="bg-[url('/img/PATTERN02.svg')] bg-no-repeat bg-top bg-cover w-screen h-[125px] sm:h-[150px] lg:h-[270px] absolute bottom-0 left-0 -z-[1]"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-9xl"></footer>
    </div>
  );
}
