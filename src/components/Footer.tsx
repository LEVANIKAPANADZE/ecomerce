import img from "/assets/shared/desktop/image-best-gear.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  const arr = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

  return (
    <footer>
      <div className="mx-auto px-[24px] flex flex-col items-center text-center">
        <img
          src={img}
          alt="Music gear image with guy"
          className="rounded-[5px] mb-[40px]"
        />
        <h1 className="text-[28px] font-bold leading-[100%] tracking-[1px]">
          BRINGING YOU THE <br />
          <span className="text-orange-500">BEST</span> AUDIO GEAR
        </h1>
        <p className="text-[15px] leading-[25px] mb-[120px] opacity-70 mt-[32px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="w-full bg-black text-white">
        <hr className="w-[101px] h-[4px] bg-[#D87D4A] border-0 mx-auto mb-8" />
        <div className="max-w-[1100px] mx-auto px-[24px] text-center py-10">
          <h1 className="font-black text-[25px]">audiophile</h1>

          <div className="flex flex-col gap-4 mt-4">
            {arr.map((item, index) => (
              <Link
                to={`/${item.toLowerCase()}`}
                key={index}
                className="font-bold text-[13px]
              leading-[25px] tracking-[2px] uppercase cursor-pointer hover:text-orange-500"
              >
                {item}
              </Link>
            ))}
          </div>

          <p className="mt-12 opacity-50 font-normal text-[15px] leading-[25px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <h4 className="mt-12 opacity-50 mb-[110px] text-[15px] leading-[25px] font-bold">
            Copyright 2021. All Rights Reserved
          </h4>
        </div>
      </div>
    </footer>
  );
}
