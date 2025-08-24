import shoppingCart from "/carts.png";
import { useState } from "react";
import Selection from "../components/AudioTechSel";

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      <header className="bg-black text-white flex justify-between items-center px-[24px] py-[32px] border-b-2 border-white/10">
        <div>
          <img
            src="/menu.png"
            alt="Burger Menu"
            className="h-[27px] w-[27px] cursor-pointer"
            onClick={() => setBurger(!burger)}
          />
        </div>

        <h1 className="font-black text-[20px]">audiophile</h1>

        <img
          src={shoppingCart}
          alt="Shopping Cart"
          className="h-[23px] w-[23px] cursor-pointer"
        />
      </header>

      <div className="border-b-2 border-white">
        {burger ? <Selection /> : null}
      </div>
    </div>
  );
}
