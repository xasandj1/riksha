import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  {
    img: images.free,
    title: "доставка",
    txt: "при заказе от 600 ₽ ",
  },
  {
    img: images.deliver,
    title: "за 60 мин",
    txt: "или проморол за опоздание",
  },
  {
    img: images.gives,
    title: "бонусы",
    txt: "бонусная система 1 ₽ = 1 бонус",
  },
  {
    img: images.fresh,
    title: "продукты",
    txt: "Никаких заготовок!",
  },
];

const Header = () => {
  return (
    <header className="h-[780px]">
      <div className="container">
        <div className="flex justify-between items-center mt-[40px] bg-lghite">
          <div className="pl-[60px]">
            <h1 className="max-w-[495px]  w-full font-bold text-[20px] md:text-[40px]">Калифорния <span className="text-primary">в подарок</span> при первом заказе</h1>
            <p className="font-medium text-[15px] md:text-[20px] text-dark"><span>от 1500 ₽ </span></p>
          </div>
          <div className="pr-[60px] pb-[23px]">
          <Image src={images.banner} alt="banner" />
          </div>
        </div>
        <div className="mt-[100px] flex items-center justify-between flex-wrap">
          {cards.map((card, i) => (
            <div className="flex items-center justify-center flex-col" key={i}>
              <Image src={card.img} alt="img" className="" />
              <div className="text-center">
                <h3 className="font-bold text-[14px] leading-[18px] text-dark">{card.title}</h3>
                <p className="font-normal text-[14px] text-dark">{card.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-[-1] bottom-[400px]">
      <Image src={images.bgclock} alt='tree bg' className="  "/>
      </div>
    </header>
  );
};

export default Header;
