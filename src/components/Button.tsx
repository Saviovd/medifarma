import Link from "next/link";
import { IconType } from "react-icons";

interface IButtonProps {
  className?: string;
  icon: IconType;
  content?: string;
  href?: string;
}

export default function Button({
  className = "",
  icon: Icon,
  content,
  href,
}: IButtonProps) {
  return href ? (
    <Link
      href={href}
      target="_blank"
      className={`flex items-center gap-2 bg-light-blue w-fit h-8 lg:h-12 pr-3 pl-11 lg:pl-16 rounded-3xl relative text-white font-medium lg:text-lg ${className}`}
    >
      <div className="bg-dark-blue p-3 rounded-full absolute h-10 w-10 lg:w-14 lg:h-14 left-0 flex items-center justify-center fill-white">
        <Icon size={28} />
      </div>
      {content}
    </Link>
  ) : (
    <div
      className={`flex items-center gap-2 bg-light-blue w-fit h-8 lg:h-12 pr-3 pl-11 lg:pl-16 rounded-3xl relative text-white font-medium lg:text-lg ${className}`}
    >
      <div className="bg-dark-blue p-3 rounded-full absolute h-10 w-10 lg:w-14 lg:h-14 left-0 flex items-center justify-center fill-white">
        <Icon size={28} />
      </div>
      {content}
    </div>
  );
}
