import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../constants";

const links = [
  { title: "Пицца", href: "/" },
  { title: "Суши", href: "/" },
  { title: "Роллы", href: "/" },
  { title: "Сеты", href: "/" },
  { title: "Wok", href: "/" },
  { title: "Супы", href: "/" },
  { title: "Салаты", href: "/" },
  { title: "Десерты", href: "/" },
  { title: "Напитки", href: "/" },
  { title: "Акции", href: "/" },
];
const Footer = () => {
  return (
    <footer className="bg-dark pt-8 pb-14 text-white">
      <div className="container">
        <div className="flex space-x-[90px] flex-wrap">
          <div className="flex items-center">
            <Link href={"/"}>
              <a className="">
                <Image src={images.footerlogo} alt="logo" />
              </a>
            </Link>
            <ul className="flex items-center flex-wrap">
                <li className="">
                  <Link href={"/"}>
                    <a className="">О нас</a>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"}>
                    <a className="">Доставка и оплата</a>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"}>
                    <a className="">Контакты</a>
                  </Link>
                </li>
            </ul>
          </div>
          <div className="flex items-center space-x-[87px]">
          <ul className="flex items-center flex-wrap">
              {links.map((link, i) => (
                <li className="" key={i}>
                  <Link href={"/"}>
                    <a className="">
                      xaxaxaxa
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
