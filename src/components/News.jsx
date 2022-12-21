import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  {
    img: images.rollsushi,
    span:"+150 ₽",
    gram:"200 грамм",
    kall:" 130 Ккал",
    button:"30 см",
    dots: images.dots,
    buttons:"50 см",
    title:'Ролл "Филадельфия"',
    txt:'Лосось, сыр "Филадельфия", огурец, авокадо ',
    price:"219 ₽",
    sets:images.sets,
    tops:images.tops,
    sell:"269 ₽"
  },
  {
    img: images.hotsushi,
    span:"+150 ₽",
    gram:"200 грамм",
    kall:" 130 Ккал",
    button:"30 см",
    dots: images.dots,
    buttons:"50 см",
    title:'Ролл "Чикен энд Чиз"',
    txt:'Лосось, сыр "Филадельфия", огурец, авокадо ',
    price:"219 ₽",
    sets:images.hot,
    tops:images.topss,
    sell:"269 ₽"
  },
  {
    img: images.rollsushi,
    span:"+150 ₽",
    gram:"200 грамм",
    kall:" 130 Ккал",
    button:"30 см",
    dots: images.dots,
    buttons:"50 см",
    title:'Ролл "Филадельфия"',
    txt:'Лосось, сыр "Филадельфия", огурец, авокадо ',
    price:"199 ₽",
    sets:images.sets,
    tops:images.topss,
  }
]

const News = () => {
  return (
    <section className="sm:mt-[40px] xr:mt-[20px] mt-[40px] sm:mb-[70px] xr:mb-[30px] mb-[100px]">
      <div className="container">
        <div className="py-[24px]">
          <div className="flex items-baseline xr:items-center flex-wrap">
            <Image src={images.stickerroll} alt="stickroll" />
            <h1 className="font-semibold xr:text-[30px] text-[48px] text-dark sm:text-[48px] xr:ml-1  ml-[15px]">
              Топ позиции
            </h1>
            <h2 className="font-medium xr:text-[30px] sm:text-[48px] text-[48px] xr:ml-2 ml-[32px] text-grey">
              <span>Новинки</span>
            </h2>
          </div>
          <div className="sm:mt-7 xr:mt-2 mt-10 flex items-center justify-center flex-wrap ">    
          {cards.map((card,i)=>(
            <div key={i} className="rounded-[20px] relative bg-white max-w-[392px] w-full sm:px-5 sm:py-5 xr:px-2 xr:py-2 px-5 py-5 xr:mx-0 mx-3 sx:mb-3 sm:mb-4 mb-0">
             <Image src={card.img} alt=""/>
             <div className="flex items-end justify-end flex-col">
              <span className="text-grey text-xs font-semibold">{card.span}</span>
              <div className="flex items-center justify-between">
                <span className="font-normal text-sm text-grey xr:mr-0 sm:mr-2 mr-2">{card.gram}</span>
                <Image src={card.dots} alt="dots"/>
                <span className="font-normal text-sm text-grey xr:ml-0 sm:ml-2 ml-2">{card.kall}</span>
                <div className="flex items-center xr:ml-3 sm:ml-[76px] ml-[76px] mt-[2px]">
                  <button className="bg-primary px-2 py-1 rounded-sm text-white font-semibold text-sm font-ttinter mr-1">{card.button}</button>
                  <Image src={card.dots} alt="dots"/>
                  <button className="bg-grey px-2 py-1 rounded-sm text-white font-semibold text-sm font-ttinter ml-1">{card.buttons}</button>
                </div>
              </div>
             </div>
             <div className="flex flex-col mt-1">
                    <h3 className="text-dark font-ttinter font-semibold text-2xl">{card.title}</h3>
                    <p className="text-dark font-ttinter font-normal text-sm">{card.txt}</p>
                    <div className="flex items-center justify-between mt-10">
                      <h2 className="font-bold font-ttinter text-3xl text-dark">{card.price}</h2>

                      <div className='relative max-w-[180px] w-full '>
                        <button className='bg-primary w-full h-[44px] rounded-sm btn text-white relative font-bold text-sm font-ttinter'><span className='relative z-[1]'>Заказать</span></button>
                         <div className='absolute top-0 left-0'>
                           <Image src={images.shadow} alt="shadow" className=''/>
                          </div>
                       </div>
                    </div>
                  </div>
                
              <div className="absolute  top-5 left-2">
                <Image src={card.sets} alt="sets"/>
              </div>
              <div className="absolute top-0 sm:right-[-5%] xr:right-0 right-[-5%]">
                <Image src={card.tops} alt="tops"/>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
