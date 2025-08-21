import shoppingCart from "/carts.png";
import { useState } from "react";
import Selection from "../components/AudioTechSel";

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <div>
      {" "}
      <header>
        <div>
          <img
            src="/menu-bar.png"
            alt="Burger Menu"
            className="h-[27px] w-[27px]"
            onClick={() => setBurger(!burger)}
          />
        </div>

        <h1>audiophile</h1>

        <img
          src={shoppingCart}
          alt="Shopping Cart"
          className="h-[27px] w-[27px]"
        />
      </header>
      <hr />
      {burger ? <Selection /> : null}
    </div>
  );
}
