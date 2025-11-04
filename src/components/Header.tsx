import shoppingCart from "/carts.png";
import { useState } from "react";
import Selection from "../components/AudioTechSel";

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      <header
        className="bg-black text-white flex justify-between 
        items-center 
        px-[24px] py-[32px] border-b-3 border-white/10
        md:px-[40px] md:py-[34px] md:justify-start md:gap-6"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src="/menu.png"
            alt="Burger Menu"
            className="h-[27px] w-[27px] cursor-pointer md:h-[35px] md:w-[35px]"
            onClick={() => setBurger(!burger)}
          />
          <h1 className="font-black text-[20px] md:text-[23px]">audiophile</h1>
        </div>

        <div className="ml-auto">
          <img
            src={shoppingCart}
            alt="Shopping Cart"
            className="h-[23px] w-[23px] cursor-pointer md:h-[31px] md:w-[31px]"
          />
        </div>
      </header>

      <div className="border-b-2 border-white">
        {burger ? <Selection /> : null}
      </div>
    </div>
  );
}
