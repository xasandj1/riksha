import Image from "next/image";
import React from "react";
import { images } from "../constants";

const News = () => {
  return (
    <section className="mt-[40px] hidden">
      <div className="container">
        <div className="py-[24px] ">
          <div className="flex items-baseline">
            <Image src={images.stickerroll} alt="stickroll" />
            <h1 className="font-semibold text-[48px] text-dark ml-[15px]">
              Топ позиции
            </h1>
            <h2 className="font-medium text-[48px] ml-[32px] text-grey">
              <span>Новинки</span>
            </h2>
          </div>
          <div className="mt-[40px] max-w-[400px] w-full bg-white">
            <div className="">
              <Image src={images.rollsushi} alt="rollsushi" />
              <div className="flex items-end justify-end mr-[40px]"><p className="text-grey text-[12px] font-semibold">+150 ₽</p></div>
              <div className="flex items-center mt-[2px]">
                <p className="font-normal text-grey flex items-center">
                  200 грамм
                  <span className="pr-[8px] pl-[8px] pb-[4px]">
                    <Image src={images.orange} alt="orange" />
                  </span>
                  130 Ккал
                </p>
               <div className="flex items-center ml-[75px]">
               <button className="font-normal bg-primary px-[8px] py-[4px] text-white flex items-center rounded-[2px]">
                  30 см
                </button>
                <span className="pr-[8px] pl-[8px] pb-[4px]">
                  <Image src={images.orange} alt="orange" />
                </span>
                <button className="font-normal bg-lghite px-[8px] py-[4px] text-grey flex items-center rounded-[2px]">
                  50 см
                </button>
               </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[24px] font-semibold text-dark">Ролл Филадельфия</h3>
                <p className="font-normal text-[14px] text-dark mt-[4px]">Лосось, сыр Филадельфия, огурец, авокадо</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
