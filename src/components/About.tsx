import Title from "./Title";
import { MdGroups } from "react-icons/md";

export default function About() {
  return (
    <div
      className="w-full md:m-auto max-w-[1400px] rounded-3xl shadow-xl drop-shadow-2xl flex justify-between p-4 md:p-8 pt-10 bg-gray-50 md:mt-20 flex-col gap-5"
      id="about"
    >
      <div className="absolute -top-5">
        <Title content="Quem somos" icon={MdGroups} className="" />
      </div>
      <p className="font-medium text-sm md:text-base leading-6">
        A Medifarma é a sua parceira de saúde em Manaus, oferecendo
        medicamentos, produtos de bem-estar e atendimento humanizado. Nosso
        compromisso é garantir qualidade, preços acessíveis e cuidado em cada
        detalhe. Aqui, você encontra soluções para viver melhor, com a confiança
        e o respeito que você merece.
      </p>

      <span className="font-medium text-sm md:text-base">
        Medifarma: a farmácia de Manaus feita para você
      </span>
    </div>
  );
}
