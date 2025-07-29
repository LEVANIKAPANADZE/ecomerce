import { Link } from "react-router-dom";
import rightArrow from "/right-arrow.png";

export default function AudioTechSel() {
  const navArr = [
    {
      path: "/HEADPHONES",
      name: "HEADPHONES",
      image:
        "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
    },
    {
      path: "/SPEAKERS",
      name: "SPEAKERS",
      image:
        "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
    },
    {
      path: "/EARPHONES",
      name: "EARPHONES",
      image:
        "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
    },
  ];

  return (
    <div>
      {navArr.map((element) => {
        return (
          <Link key={element.name} to={`${element.path}`}>
            <img
              src={element.image}
              alt="Audio tech's image"
              className="w-[100px] h-[100px]"
            />
            <span>{element.name}</span>

            <div>
              {" "}
              SHOP{" "}
              <img
                src={rightArrow}
                alt="Arrow to right"
                className="w-[100px] h-[100px]"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
