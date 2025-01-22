import VerticalCard from "./VerticalCard";

type Item = {
  img: string;
  title: string;
};

export default function CardList() {
  const list: Item[] = [
    {
      img: "/img/medicamentos.jpg",
      title: "Medicamentos",
    },
    {
      img: "/img/medicamentos.jpg",
      title: "Higiene e Beleza",
    },
    {
      img: "/img/medicamentos.jpg",
      title: "Farmácia",
    }
  ];

  return (
    <div className="w-full md:m-auto max-w-[1400px] flex flex-wrap justify-between md:mt-20 gap-6 sm:gap-8 lg:gap-16 ">
      {list.map((item, index) => (
        <VerticalCard key={index} img={item.img} title={item.title} />
      ))}
    </div>
  );
}
