import img from "/assets/shared/desktop/image-best-gear.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  const arr = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

  return (
    <footer>
      <div className="mx-[24px] flex flex-col items-center justify-center text-center">
        <img
          src={img}
          alt="Music gear image with guy"
          className="rounded-[5px] mb-[40px]"
        />
        <h1 className="text-[28px] font-bold leading-[100%] tracking-[1px]">
          BRINGING YOU THE <br />
          <span className="text-orange-500">BEST</span> AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="mx-[24px] text-center">
        <h1>adiophile</h1>

        <div>
          {arr.map((item, index) => (
            <Link to={`/${item.toLowerCase()}`} key={index}>
              {item}
            </Link>
          ))}
        </div>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <h4>Copyright 2021. All Rights Reserved</h4>
      </div>
    </footer>
  );
}
