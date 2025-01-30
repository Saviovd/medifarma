import { FaFacebookF, FaInstagram, FaPhoneVolume } from "react-icons/fa6";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function Contact() {
  return (
    <div
      className="w-full md:m-auto max-w-[1400px] rounded-3xl shadow-xl drop-shadow-2xl flex justify-end p-4 bg-gray-50 md:mt-40 gap-2 min-h-12 relative"
      id="contact"
    >
      <div className="absolute -top-5 left-4 md:left-8 z-10">
        <Button
          content="Entre em contato"
          icon={FaPhoneVolume}
          className=""
          href={"https://api.whatsapp.com/send?phone=5592994036676"}
        />
      </div>
      <SocialMedia icon={FaInstagram} href="https://www.instagram.com/medifarmamanaus" />
      <SocialMedia icon={FaFacebookF} href=" https://www.facebook.com/" />
    </div>
  );
}
