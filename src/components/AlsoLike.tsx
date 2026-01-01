import type { ProductType } from "../types";
import { Link } from "react-router-dom";

type Props = {
  product: ProductType;
};

export default function AlsoLike({ product }: Props) {
  return (
    <div className="flex flex-col items-center w-[327px]">
      <h1 className="font-bold text-[24px] leading-[36px] tracking-[0.86px] mb-[40px]">
        YOU MAY ALSO LIKE
      </h1>
      {product.others.map((element, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-[32px] mb-[56px]"
        >
          <picture key={index}>
            <source media="(min-width:1440px)" srcSet={element.image.desktop} />
            <source media="(min-width:768px)" srcSet={element.image.tablet} />
            <img
              src={element.image.mobile}
              alt={`Product image ${index + 1}`}
            />
          </picture>
          <h1 className="font-bold text-[24px] leading-[100%] tracking-[1.71px]">
            {element.name}
          </h1>
          <Link
            to={`/product?slug=${encodeURIComponent(element.slug)}`}
            className="px-[30px] mt-[24px] py-[15px] bg-[#D87D4A] text-white 
                inline-block font-bold text-[13px] leading-[100%] tracking-[1px] cursor-pointer"
          >
            SEE PRODUCT
          </Link>
        </div>
      ))}
    </div>
  );
}
