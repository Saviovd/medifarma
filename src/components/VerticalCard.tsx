interface IVerticalCardProps {
  img: string;
  title: string;
}

export default function VerticalCard({ img, title }: IVerticalCardProps) {
  return (
    <div
      className="rounded-3xl shadow-xl drop-shadow-2xl flex-1 min-w-[250px] h-[300px] md:h-[400px] bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h3 className="text-base min-w-[170px] lg:text-lg font-semibold text-white lg:p-2 lg:px-6 bg-custom-gradient bg-opacity-50 rounded-3xl absolute h-8 -right-2 lg:-bottom-5 -bottom-3 lg:h-12 flex items-center justify-center lg:min-w-[200px]">
        {title}
      </h3>
    </div>
  );
}
