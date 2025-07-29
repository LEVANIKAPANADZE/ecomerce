import img from "/assets/shared/desktop/image-best-gear.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <img src={img} alt="Music gear image with guy" />

      <h1>
        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
      </h1>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>

      <div>
        <h1>udiophile</h1>

        <div>
          <Link to="/home">HOME</Link>
          <Link to="/headphones">HEADPHONES</Link>
          <Link to="/speakers">SPEAKERS</Link>
          <Link to="/earphones">EARPHONES</Link>
        </div>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <h4>Copyright 2021. All Rights Reserved</h4>
      </div>
    </div>
  );
}
