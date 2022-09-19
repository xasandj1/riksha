import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
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
    <section className="md:relative">
      <div className="container">
        <div className="flex justify-between items-center mt-[40px] bg-lghite">
          <div className="pl-[10px] sm:pl-[60px]">
            <h1 className="max-w-[495px]  w-full font-bold text-[15px] sm:text-[20px] md:text-[40px]">
              Калифорния <span className="text-primary">в подарок</span> при
              первом заказе
            </h1>
            <p className="font-medium text-[10px] sm:text-[15px] md:text-[20px] text-dark">
              <span>от 1500 ₽ </span>
            </p>
            <button className="bg-primary px-[10px] py-[25px]  sm:px-[20px] sm:py-[40px] md:px-[30px] md:py-[60px] xl:px-[40px] xl:py-[75px]  mt-6 rounded-[50%] font-regular sm:font-bold text-white text-[10px] sm:text-lg">Подробнее</button>
          </div>
          <div className="pr-[10px] sm:pr-[60px] sm:pb-[23px]">
            <Image src={images.banner} alt="banner" />
          </div>
        </div>
        <div>
      </div>
        <div className="sx:mt-[10px] xs:mt-[20px] sm:mt-[50px] lg:mt-[70px] xl:mt-[100px] flex items-center xl:items-center justify-center xl:justify-between flex-wrap">
          {cards.map((card, i) => (
            <div className="flex items-center justify-center flex-col" key={i}>
              <Image src={card.img} alt="img" className="" />
              <div className="text-center">
                <h3 className="font-bold text-[14px] leading-[18px] text-dark">
                  {card.title}
                </h3>
                <p className="font-normal text-[14px] text-dark">{card.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Header
