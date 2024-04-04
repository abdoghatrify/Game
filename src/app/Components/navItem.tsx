import { jost } from "../ui/fonts";
import Link from "next/link";

export default function NavItem({ itemName, href }: any) {
  return (
    <Link
      href={href}
      className={`${jost.className} md:text-xl md:px-8 md:font-normal px-3 text-2xl font-bold `}
    >
      {itemName}
    </Link>
  );
}
