import Favicon from "@/assets/favicon.svg";
import Account from "@/assets/icons/account.svg";
import Arrow from "@/assets/icons/arrow.png";
import { Phone } from "@/assets/icons/phone";

import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Members", href: "/members" },
  { label: "Blog", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Contact", href: "#" }
];

export function Header() {
  return (
    <header className="text-white absolute top-0 left-0 w-full py-[50px] px-[60px] flex justify-between items-center z-[1]">
      <Image src={Favicon} alt="main logo" className="w-[150px] h-[42px]" />
      <div>
        <nav>
          <ul className="flex gap-5">
            {LINKS.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="flex items-center gap-2"
              >
                <p>{item.label}</p>
                {index !== LINKS.length - 1 && (
                  <Image src={Arrow} alt="arrow" className="w-2 h-1" />
                )}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-3">
          <Phone />
          <p>+68 685 88666</p>
        </div>
        <div className="w-10 h-10 border-[1px] border-white rounded-full flex items-center justify-center">
          <Image src={Account} alt="account" className="w-[20px] h-[20px]" />
        </div>
        <button className="w-[150px] h-[42.5px] border-[1px] border-white rounded-full flex items-center justify-center">
          <p>Add Property</p>
        </button>
      </div>
    </header>
  );
}
