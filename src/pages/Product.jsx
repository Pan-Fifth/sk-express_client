import React from "react";
import { fashion, sports, secondHand, home } from "../resource/shop";

const Product = () => {
  return (
    <>
      <section className="py-8 bg-red-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">Fashion</h2>
          <div className="rounded-3xl bg-white flex flex-wrap gap-2 justify-center p-2">
            {fashion.map((el, index) => (
              <a key={index} href={el.link} className="flex flex-col items-center">
                <img
                  className="transition-transform transform hover:scale-110 rounded-2xl w-48 h-48 object-cover"
                  src={el.pic}
                  alt={el.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-red-500">Sports and Outdoors</h2>
          <div className="rounded-3xl bg-white flex flex-wrap gap-2 justify-center p-2">
            {sports.map((el, index) => (
              <a key={index} href={el.link} className="flex flex-col items-center">
                <img
                  className="transition-transform transform hover:scale-110 rounded-2xl w-48 h-48 object-cover"
                  src={el.pic}
                  alt={el.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-red-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">Second Hands</h2>
          <div className="rounded-3xl bg-white flex flex-wrap gap-2 justify-center p-2">
            {secondHand.map((el, index) => (
              <a key={index} href={el.link} className="flex flex-col items-center">
                <img
                  className="transition-transform transform hover:scale-110 rounded-2xl w-48 h-48 object-cover"
                  src={el.pic}
                  alt={el.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-red-500">Home Appliances</h2>
          <div className="rounded-3xl bg-white flex flex-wrap gap-2 justify-center p-2">
            {home.map((el, index) => (
              <a key={index} href={el.link} className="flex flex-col items-center">
                <img
                  className="transition-transform transform hover:scale-110 rounded-2xl w-48 h-48 object-cover"
                  src={el.pic}
                  alt={el.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
