import React, { useState } from "react";
import Cards from "../Components/Cards";
import Footer from "./Footer";
import { CarouselButton } from "../Components/CarouselButton";

const productArray = [
  {
    id: 1,
    src: "./img/fish.svg",
    name: "Окунь морской",
    price: "1000",
    place: "Архангельск",
    divider: "0.100",
    category: "Fish",
  },
  {
    id: 2,
    src: "./img/shrimps.svg",
    name: "Креветка 50/70",
    price: "1000",
    place: "Архангельск",
    divider: "0.300",
    category: "Shrimp",
  },
  {
    id: 3,
    src: "./img/scallops.svg",
    name: "Гребешок морской",
    price: "1000",
    place: "Архангельск",
    divider: "0.200",
    category: "Scallop",
  },
  {
    id: 4,
    src: "./img/escalop.svg",
    name: "Устрицы",
    price: "1000",
    place: "Дальний Восток",
    divider: "0.100",
    category: "Ouster",
  },
  {
    id: 5,
    src: "./img/osm.svg",
    name: "Осьминог средний",
    price: "1000",
    place: "Архангельск",
    divider: "0.400",
    category: "Squid",
  },
  {
    id: 6,
    src: "./img/Cancer.svg",
    name: "Рак морской",
    price: "1000",
    place: "Архангельск",
    divider: "0.300",
    category: "Crab",
  },
  {
    id: 7,
    src: "./img/crab.svg",
    name: "Краб",
    price: "1000",
    place: "Новая Зеландия",
    divider: "0.500",
    category: "Crab",
  },
  {
    id: 8,
    src: "./img/ovar.svg",
    name: "Омар",
    price: "1000",
    place: "Архангельск",
    divider: "0.200",
    category: "Crab",
  },
  {
    id: 9,
    src: "./img/salmon.svg",
    name: "Лосось филе",
    price: "1000",
    place: "Карелия",
    divider: "0.400",
    category: "Fish",
  },
  {
    id: 10,
    src: "./img/squid.svg",
    name: "Кальмар",
    price: "1000",
    place: "Карелия",
    divider: "0.300",
    category: "Squid",
  },
  {
    id: 11,
    src: "./img/tuni.svg",
    name: "Тунец филе",
    price: "1000",
    place: "Новая Зеландия",
    divider: "0.300",
    category: "Fish",
  },
  {
    id: 12,
    src: "./img/mussels.svg",
    name: "Мидии",
    price: "1000",
    place: "Архангельск",
    divider: "0.200",
    category: "Scallop",
  },
];

export default function Shop() {
  const [category, setCategory] = useState("");

  const map = productArray.map((n) => (
    <Cards
      src={n.src}
      key={n.id}
      name={n.name}
      divider={n.divider}
      place={n.place}
      price={n.price}
    />
  ));

  return (
    <>
      <div
        className="carousel__grid"
        onClick={() => (category === "" ? "" : setCategory(""))}
      >
        <div className="carousel">
          <button
            type="button"
            className="carousel__button"
            onClick={() => setCategory("")}
          >
            Ассортимент
          </button>
          <div className="carousel__show">
            <CarouselButton
              name="рыба"
              onClick={() => (category === "" ? setCategory("Fish") : "")}
            />
            <CarouselButton
              name="крабы"
              onClick={() => (category === "" ? setCategory("Crab") : "")}
            />
            <CarouselButton
              name="гребешки и мидии"
              onClick={() => (category === "" ? setCategory("Scallop") : "")}
            />
            <CarouselButton
              name="креветки"
              onClick={() => (category === "" ? setCategory("Shrimp") : "")}
            />
            <CarouselButton
              name="устрицы"
              onClick={() => (category === "" ? setCategory("Ouster") : "")}
            />
            <CarouselButton
              name="кальмары"
              onClick={() => (category === "" ? setCategory("Squid") : "")}
            />
          </div>
      </div>
        <div className="cards__grid ">
          {category === ""
            ? map
            : productArray
                .filter((n) => n.category === category)
                .map((n) => (
                  <Cards
                    key={n.id}
                    src={n.src}
                    name={n.name}
                    divider={n.divider}
                    place={n.place}
                    price={n.price}
                  />
                ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
