import { IconType } from "react-icons";

interface IButtonProps {
  className?: string;
  icon: IconType;
  content: string;
}

export default function Title({
  className = "",
  icon: Icon,
  content,
}: IButtonProps) {
  return (
    <div
      className={`flex items-center gap-2 bg-light-blue w-fit lg:h-12 h-10 pr-3 pl-14 lg:pl-16 rounded-3xl relative text-white font-medium text-lg ${className}`}
    >
      <div className="bg-dark-blue p-3 rounded-full absolute lg:w-14 lg:h-14 h-12 w-12 left-0 flex items-center justify-center fill-white">
        <Icon size={32} />
      </div>
      {content}
    </div>
  );
}
