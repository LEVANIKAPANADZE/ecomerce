import { useSearchParams, useNavigate, Link } from "react-router-dom";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Selection from "../components/AudioTechSel";
import type { ProductType } from "../types";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  useEffect(() => {
    const found = slug ? data.find((product) => product.slug === slug) : null;
    setProduct(found || null);
  }, [slug]);

  useEffect(() => {
    if (!product) {
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [product, navigate]);

  if (product === null) {
    return <p>Product not found. Redirecting to Home...</p>;
  }

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <span
        onClick={() => navigate(-1)}
        className="block mt-[16px] ml-[24px] text-[#000000] opacity-[50%] 
        text-[15px] leading-[25px] self-start"
      >
        Go Back
      </span>

      <div className="w-[327px] mt-[24px]">
        <main>
          <div>
            <img
              src={product.categoryImage.mobile}
              alt={product.name}
              className="block md:hidden w-full rounded-[10px]"
            />
            <img
              src={product.categoryImage.tablet}
              alt={product.name}
              className="hidden md:block xl:hidden w-full"
            />
            <img
              src={product.categoryImage.desktop}
              alt={product.name}
              className="hidden xl:block w-full"
            />
            {product.new && (
              <p className="mt-[32px] text-[#D87D4A] text-[14px] leading-[100%] tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h1 className="my-[24px] font-bold text-[28px] leading-[100%] tracking-[1px]">
              {product.name}
            </h1>
            <p className="text-[15px] leading-[25px] opacity-[50%] mb-[24px]">
              {product.description}
            </p>
            <span className="font-bold text-[18px] leading-[100%] tracking-[1.29px]">
              ${product.price}
            </span>
          </div>
        </main>

        <div className="flex mt-[31px] gap-[16px] w-[296px]">
          <div
            className="bg-[#F1F1F1] w-[120px] p-[15px] 
          flex items-center justify-between"
          >
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="font-bold ml-[15px] text-[13px] leading-[100%] tracking-[1px] opacity-[25%]"
            >
              -
            </button>
            <span className="mx-[20px]">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="font-bold text-[13px] mr-[15px] leading-[100%] tracking-[1px] opacity-[25%]"
            >
              +
            </button>
          </div>
          <button>ADD TO CART</button>
        </div>

        <section>
          <h1>FEATURES</h1>
          <p>{product.features}</p>

          <div>
            <h1>IN THE BOX</h1>
            <div>
              {product.includes.map((item, index) => (
                <div key={index}>
                  <span>{item.quantity}x</span>
                  <span>{item.item}</span>
                </div>
              ))}
            </div>

            <div>
              {Object.values(product.gallery).map((image, index) => (
                <img
                  key={index}
                  src={image.mobile}
                  alt={`Product image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h1>YOU MAY ALSO LIKE</h1>
          {product.others.map((element, index) => (
            <div key={index}>
              <div>
                <img src={element.image.mobile} alt={element.name} />
              </div>
              <h1>{element.name}</h1>
              <Link to={`/product?slug=${encodeURIComponent(element.slug)}`}>
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </section>
      </div>

      <Selection />
    </div>
  );
}
