import type { ProductType } from "../types";
import { Link } from "react-router-dom";

type Props = {
  product: ProductType;
};

export default function AlsoLike({ product }: Props) {
  return (
    <div>
      <h1>YOU MAY ALSO LIKE</h1>
      {product.others.map((element, index) => (
        <div key={index}>
          <picture key={index}>
            <source media="(min-width:1440px)" srcSet={element.image.desktop} />
            <source media="(min-width:768px)" srcSet={element.image.tablet} />
            <img
              src={element.image.mobile}
              alt={`Product image ${index + 1}`}
            />
          </picture>
          <h1>{element.name}</h1>
          <Link to={`/product?slug=${encodeURIComponent(element.slug)}`}>
            SEE PRODUCT
          </Link>
        </div>
      ))}
    </div>
  );
}
