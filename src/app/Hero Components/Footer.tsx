import Logo from "../Components/logo";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/facebook.png";
import Discord from "../../../public/discord.png";
import { jost } from "../ui/fonts";

export default function Footer() {
  return (
    <div
      className={`w-full bg-main-black-bg text-white py-10 text-xs md:text-base px-5 ${jost.className}`}
    >
      <div className="flex gap-10 container mx-auto mb-10">
        <div className=" max-w-xs w-full flex flex-col gap-5 text-sm text">
          <Link href={"."}>
            <Logo />
          </Link>
          <p className="text-center lg:text-left">
            The Best Rise of Kingdoms Bot
          </p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4 ">
            <b>About</b>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/prices"}>Prices</Link>
          </div>

          <div>
            <p>Find us at</p>
            <p className="mt-6 mb-3">Discord group</p>
            <div className="flex gap-5">
              <Link href={"https://discord.com/"}>
                <Image
                  alt=""
                  src={Discord}
                  className="w-7 h-7 md:h-10 md:w-10"
                />
              </Link>
              <Link href={"https://www.facebook.com/"}>
                <Image
                  alt=""
                  src={Facebook}
                  className="w-7 h-7 md:h-10 md:w-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="h-px bg-white opacity-20 my-8"></div>
        <div className="flex justify-between">
          <p>Copyright 2023 bitway. All Rights Reserved</p>
          <div className="flex">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
