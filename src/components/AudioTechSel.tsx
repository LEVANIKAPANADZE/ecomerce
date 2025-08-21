import { Link } from "react-router-dom";
import rightArrow from "/fast-forward.png";

export default function AudioTechSel() {
  type NavItem = {
    path: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };

  const navArr: NavItem[] = [
    {
      path: "/HEADPHONES",
      name: "HEADPHONES",
      image: {
        mobile:
          "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
        tablet:
          "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        desktop:
          "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      },
    },
    {
      path: "/SPEAKERS",
      name: "SPEAKERS",
      image: {
        mobile:
          "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        tablet:
          "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
        desktop:
          "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      },
    },
    {
      path: "/EARPHONES",
      name: "EARPHONES",
      image: {
        mobile:
          "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
        tablet:
          "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
        desktop:
          "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      },
    },
  ];

  return (
    <div>
      {navArr.map((item) => (
        <Link key={item.name} to={item.path}>
          <picture>
            <source media="(min-width:1024px)" srcSet={item.image.desktop} />
            <source media="(min-width:768px)" srcSet={item.image.tablet} />
            <img src={item.image.mobile} alt={`${item.name} category`} />
          </picture>
          <span>{item.name}</span>
          <div>
            SHOP <img src={rightArrow} alt="Arrow to right" />
          </div>
        </Link>
      ))}
    </div>
  );
}
