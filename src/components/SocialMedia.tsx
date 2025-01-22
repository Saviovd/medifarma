import Link from "next/link";
import { IconType } from "react-icons";

interface ISocialMedia {
  icon: IconType;
  content?: string;
  href?: string;
  className?: string;
}

export default function SocialMedia({
  className = "",
  icon: Icon,
  href,
}: ISocialMedia) {
  if (!href) {
    return null;
  }

  return (
    <Link href={href} target="_blank">
      <div
        className={`bg-dark-blue p-3 rounded-full h-10 w-10 lg:w-14 lg:h-14 left-0 flex items-center justify-center fill-white text-white font-medium lg:text-lg ${className} hover:bg-light-blue transition-colors`}
      >
        <Icon size={28} />
      </div>
    </Link>
  );
}
