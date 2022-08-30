import React, { useState } from "react";
import Image from "next/image";
import { images } from "../constants";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
const cards = [
  {
    img: images.pizza,
    title: "Акции",
  },
  {
    img: images.sushi,
    title: "Суши",
  },
  {
    img: images.rolle,
    title: "Роллы",
  },
  {
    img: images.set,
    title: "Сеты",
  },
  {
    img: images.wok,
    title: "Wok",
  },
  {
    img: images.soup,
    title: "Супы",
  },
  {
    img: images.salat,
    title: "Салаты",
  },
  {
    img: images.desert,
    title: "Десерты",
  },
  {
    img: images.chay,
    title: "Напитки",
  },
  {
    img: images.sale,
    title: "Акции",
  },
];
const links = [
  {
    title: "О нас",
  },
  {
    title: "Доставка и оплата",
  },
  {
    title: "Контакты",
  },
  {
    title: "Бонусы",
  },
  {
    title: "Бонусы",
  },
];
const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
    const imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      active ? img.classList.remove("remove") : img.classList.add("remove");
    }
  };

  return (
    <header className="header">
      <nav className="sticky top-0 left-0 w-full py-2">
        <div className="container">
          <div className="relative">
            <Link href={"/"}>
              <a className="absolute inset-y-auto left-0 hidden lg:block">
                {/* */}
                <Image
                  src={images.logo}
                  alt="logo"
                  className="max-w-[100px] lg:max-w-[130px] w-full h-[100px] lg:min-h-[260px]"
                />
              </a>
            </Link>
            <div className="flex items-center justify-between md:justify-end py-2 lg:py-6 space-x-10 lg:space-x-20">
              <Link href={"/"}>
                <a className="lg:hidden block">
                  {/* */}
                  <Image
                    src={images.logo}
                    alt="logo"
                    width={100}
                    height={100}
                    className="logo"
                  />
                </a>
              </Link>
              <ul className="hidden md:flex items-center space-x-6 lg:space-x-12">
                {links.map((card, i) => (
                  <li className="" key={i}>
                    <Link href={"/"}>
                      <a className="font-regular text-dark text-[15px]">
                        {card.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-6 lg:space-x-14">
                <div className="hidden xs:flex flex-col items-center sm:items-end justify-center">
                  <Link href={"/"}>
                    <a
                      href="tel:+7 (495) 617-14-24"
                      className="flex items-center space-x-2 font-medium text-base text-dark"
                    >
                      <FaPhoneAlt fontSize={14} color="#E07153" />
                      <span>+998 88 033 00 70</span>
                    </a>
                  </Link>
                  <span className="font-medium text-[12px] text-grey">
                    c 10:00 до 23:00
                  </span>
                </div>
                <div className="hidden sm:flex items-center space-x-6">
                  <div className="flex items-center bg-lghite grey px-[16px] py-[16px] rounded-[6px] font-medium text-sm text-dark">
                    <button className="flex items-center space-x-5">
                      <span className="border-r-2 border-white pr-[16px]">
                        0 ₽
                      </span>
                      <span className="relative">
                        <FaShoppingBag color="dark" fontSize={24} />
                        <span className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full px-1">
                          0
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center bg-lghite py-[16px] px-[16px] rounded-[6px]">
                    <button>
                      <MdPersonAddAlt1 fontSize={24} color="dark" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="smallscreen md:hidden flex items-center">
                <button className="flex items-center" onClick={handleClick}>
                  <span>
                    <AiOutlineMenu fontSize={30} className="text-dark " />
                  </span>
                </button>
                {active && (
                  <div className="fixed top-0 left-0 w-full h-[100vh] backdrop-blur-lg z-50 flex justify-center items-center ">
                    <button
                      className="absolute top-[6%] right-4 flex items-center"
                      onClick={handleClick}
                    >
                      <span>
                        <IoMdClose fontSize={30} className="text-dark " />
                      </span>
                    </button>
                    <div className="flex flex-col items-center">
                      <ul className="flex flex-col items-center">
                        {links.map((card, i) => (
                          <li className="" key={i}>
                            <Link href={"/"}>
                              <a className="font-bold text-dark text-lg py-1 block">
                                {card.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="sm:hidden flex flex-col items-center space-y-6">
                        <div className="xs:hidden flex flex-col items-center justify-center mt-3">
                          <Link href={"/"}>
                            <a
                              href="tel:+7 (495) 617-14-24"
                              className="flex items-center space-x-2 font-medium text-base text-dark"
                            >
                              <FaPhoneAlt fontSize={14} color="#E07153" />
                              <span>+998 88 033 00 70</span>
                            </a>
                          </Link>
                          <span className="font-medium text-[12px] text-grey">
                            c 10:00 до 23:00
                          </span>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center bg-lghite grey px-[16px] py-[16px] rounded-[6px] font-medium text-sm text-dark">
                            <button className="flex items-center space-x-5">
                              <span className="border-r-2 border-white pr-[16px]">
                                0 ₽
                              </span>
                              <span className="relative">
                                <FaShoppingBag color="dark" fontSize={24} />
                                <span className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full px-1">
                                  0
                                </span>
                              </span>
                            </button>
                          </div>
                          <div className="flex items-center justify-center bg-lghite py-[16px] px-[16px] rounded-[6px]">
                            <button>
                              <MdPersonAddAlt1 fontSize={24} color="dark" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end py-3">
              <ul className="flex items-end space-x-10 sm:space-x-14 lg:space-x-16 overflow-x-scroll md:overflow-auto pb-2 md:pb-0">
                {cards.map((card, i) => (
                  <li className="flex items-center" key={i}>
                    <Link href={"/"}>
                      <a className="flex flex-col items-center font-medium text-dark text-base">
                        <Image src={card.img} alt="img" className="" />
                        <span className="mt-2 ">{card.title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[18px] md:bottom-3 lg:bottom-0 left-0 h-1/3 lg:h-1/2 bg-lghite z-[-2] w-full" />
      </nav>
    </header>
  );
};

export default Navbar;
