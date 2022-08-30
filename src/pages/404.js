import Image from "next/image";
import React from "react";
import { images } from "../constants";
import {Button} from '../components'
const ErrorDocument = () => {
  return (
    <section className="h-[10vh]">
      <div className="container">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <Image src={images.errorImg} alt="error" className="w-full" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="font-medium text-dark text-4xl">Страница не найдена</h2>
            <p className="font-regular text-dark text-xl text-center ">Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
            <div className="flex items-center justify-center">
                <Button>xaxaxa</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorDocument;
