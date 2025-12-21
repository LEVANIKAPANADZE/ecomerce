import shoppingCart from "/carts.png";
import { useState } from "react";
import Selection from "../components/AudioTechSel";

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      <header
        className="bg-black text-white flex items-center 
        justify-center px-[24px] py-[32px] 
        md:px-[40px] md:py-[34px] border-b-[1.5px] border-white/10"
      >
        <img
          src="/menu.png"
          alt="Burger Menu"
          className="h-[30px] w-[30px] cursor-pointer md:h-[35px] md:w-[35px] absolute left-6"
          onClick={() => setBurger(!burger)}
        />

        <h1 className="font-black text-[23px] md:text-[26px]">audiophile</h1>

        <img
          src={shoppingCart}
          alt="Shopping Cart"
          className="h-[25px] w-[25px] cursor-pointer md:h-[31px] md:w-[31px] absolute right-6"
        />
      </header>

      <div>{burger ? <Selection /> : null}</div>
    </div>
  );
}
