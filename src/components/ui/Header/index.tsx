import Favicon from "@/assets/favicon.svg";
import Account from "@/assets/icons/account.svg";
import Arrow from "@/assets/icons/arrow.png";
import { Phone } from "@/assets/icons/phone";

import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Головна", href: "/" },
  { label: "Оголошення", href: "/listings" },
  { label: "Команда", href: "/members" },
  { label: "Блог", href: "#" },
  { label: "Сторінки", href: "#" },
  { label: "Контакти", href: "#" }
];

export function Header() {
  return (
    <header className="text-white absolute top-0 left-0 w-full py-[50px] px-[60px] flex justify-between items-center z-[1]">
      <div className="flex-1 flex items-start">
        <Image
          src={Favicon}
          alt="головний логотип"
          className="w-[150px] h-[42px]"
        />
      </div>
      <div className="flex-1">
        <nav>
          <ul className="flex gap-5">
            {LINKS.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="flex items-center gap-2"
              >
                <p className="text-nowrap">{item.label}</p>
                {index !== LINKS.length - 1 && (
                  <Image src={Arrow} alt="стрілка" className="w-2 h-1" />
                )}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 flex-1 items-center justify-end">
        <div className="flex items-center gap-3">
          <Phone />
          <p>+68 685 88666</p>
        </div>
        <div className="w-10 h-10 border-[1px] border-white rounded-full flex items-center justify-center">
          <Image src={Account} alt="акаунт" className="w-[20px] h-[20px]" />
        </div>
        <button className="w-fit h-[42.5px] px-5 border-[1px] border-white rounded-full flex items-center justify-center">
          <p>Додати нерухомість</p>
        </button>
      </div>
    </header>
  );
}
