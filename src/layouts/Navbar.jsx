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
    title: "Пицца",
  },
  {
    img: images.rolle,
    title: "Пицца",
  },
  {
    img: images.set,
    title: "Пицца",
  },
  {
    img: images.wok,
    title: "Пицца",
  },
  {
    img: images.soup,
    title: "Пицца",
  },
  {
    img: images.salat,
    title: "Пицца",
  },
  {
    img: images.desert,
    title: "Пицца",
  },
  {
    img: images.chay,
    title: "Пицца",
  },
];
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="flex items-center justify-between py-[10px]">
              <Image src={images.logo} alt="logo" className="z-[2]  md:max-w-[158px] w-full" />
              <ul className="md:flex items-center justify-between hidden">
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark ml-[20px]"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark ml-[40px]"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark ml-[40px]"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark ml-[40px]"
                  >
                    Бонусы
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark ml-[40px]"
                  >
                    Вакансии
                  </a>
                </li>
                <div className="flex items-besline ml-[70px]">
                  <FaPhoneAlt color="#E07153" fontSize={16} />
                  <a
                    href="tel:+7 (495) 617-14-24"
                    className="flex flex-col font-medium text-[16px] text-dark ml-[10px] mb-[3px]"
                  >
                    +7 (495) 617-14-24{" "}
                    <span className="flex items-end justify-end font-medium text-[12px] text-grey">
                      {" "}
                      c 10:00 до 23:00
                    </span>
                  </a>
                </div>
                <div className="bg-lghite pt-[16px] pl-[16px] pb-[15px] pr-[16px] flex items-center rounded-[6px] ml-[40px]">
                <button className="font-medium text-[14px] text-dark border-r-2 border-white  pr-[16px] ">
                  <span>0 ₽</span>
                </button>
                <button className="font-medium text-[20px] text-dark pl-[16px] ">
                  <FaShoppingBag />
                </button>
              </div>
              <div className="bg-lghite px-[16px] py-[16px] rounded-[6px] ml-[20px] flex justify-center items-center">
                <button className="">
                  <MdPersonAddAlt1 color="dark" fontSize={20} />
                </button>
              </div>
              </ul>
              <div className="flex items-center md:hidden  ">
                  <FaPhoneAlt color="#E07153" fontSize={20} />
                  <a
                    href="tel:+7 (495) 617-14-24"
                    className="flex flex-col font-medium text-[20px] text-dark ml-[10px] mb-[3px]"
                  >
                    +7 (495) 617-14-24{" "}
                    <span className="flex items-end justify-end font-medium text-[15px] text-grey">
                      {" "}
                      c 10:00 до 23:00
                    </span>
                  </a>
                </div>
              <div className="smallscreen md:hidden flex items-center justify-center">
              <button
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-center bg-fiol py-[10px] px-[10px] rounded-[30px]"
              >
                <AiOutlineMenu fontSize={40} className="text-black" />
              </button>
              {active && (
                <div className="fixed top-0 left-0 w-full h-full backdrop-blur-lg z-[100] flex items-center justify-center">
                  <button
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-center absolute top-[70px] right-6"
                  >
                    <IoMdClose fontSize={40} className='' />
                  </button>
                  <ul className="flex items-center flex-col justify-center">
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark "
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark "
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark "
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark "
                  >
                    Бонусы
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="font-regular text-[14px] text-dark "
                  >
                    Вакансии
                  </a>
                </li>
                
                <div className="bg-lghite pt-[16px] pl-[16px] pb-[15px] pr-[16px] flex items-center rounded-[6px]">
                <button className="font-medium text-[14px] text-dark border-r-2 border-white  pr-[16px] ">
                  <span>0 ₽</span>
                </button>
                <button className="font-medium text-[20px] text-dark pl-[16px] ">
                  <FaShoppingBag />
                </button>
              </div>
              <div className="bg-lghite px-[16px] py-[16px] rounded-[6px] flex justify-center items-center">
                <button className="">
                  <MdPersonAddAlt1 color="dark" fontSize={20} />
                </button>
              </div>
              </ul>
                </div>
              )}
            </div>
            </div>
          </div>
          <div className="flex justify-center overflow-auto items-center bg-lghite relative top-[-10px] md:top-[-50px] pl-[10%]">
            {cards.map((card, i) => (
              <div className="mr-[60px] ml-[10px] py-[15px] flex flex-col items-center cursor-pointer" key={i}>
                <Link href={"/"}>
                  <a href="#!" className="cursor-pointer">
                  <Image src={card.img} alt="img" className="rounded-[5px] cursor-pointer" />
                  </a>
                </Link>
                <div className="">
                  <h3 className="">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
