import { useSearchParams, useNavigate } from "react-router-dom";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Selection from "../components/AudioTechSel";
import type { ProductType } from "../types";
import AlsoLike from "../components/AlsoLike";

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
        text-[15px] leading-[25px] self-start cursor-pointer"
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

        <div className="flex justify-center mt-[31px]">
          <div className="flex gap-[16px] w-[296px]">
            <div className="bg-[#F1F1F1] w-[120px] p-[15px] flex items-center justify-between">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="font-bold text-[13px] opacity-[25%]"
              >
                -
              </button>

              <span className="font-bold text-[13px] uppercase">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="font-bold text-[13px] opacity-[25%]"
              >
                +
              </button>
            </div>

            <button className="bg-[#D87D4A] text-white font-bold text-[13px] w-[160px] flex items-center justify-center">
              ADD TO CART
            </button>
          </div>
        </div>

        <section className="mt-[88px]">
          <h1 className="font-bold text-[24px] leading-[36px] tracking-[0.86px]">
            FEATURES
          </h1>
          <p className="mt-[24px] mb-[88px] opacity-50 font-normal text-[15px] leading-[25px]">
            {product.features}
          </p>

          <div>
            <h1 className="mb-[24px] font-bold text-[24px] leading-[36px] tracking-[0.86px]">
              IN THE BOX
            </h1>
            <div className="space-y-[8px] mb-[88px]">
              {product.includes.map((item, index) => (
                <div key={index}>
                  <span className="text-[#D87D4A] font-bold text-[15px] mr-[24px] leading-[25px] tracking-[0px]">
                    {item.quantity}x
                  </span>
                  <span className="text-[15px] leading-[25px] opacity-50">
                    {item.item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[20px] mb-[120px]">
              {Object.values(product.gallery).map((image, index) => (
                <picture key={index}>
                  <source media="(min-width:1440px)" srcSet={image.desktop} />
                  <source media="(min-width:768px)" srcSet={image.tablet} />
                  <img src={image.mobile} alt={`Product image ${index + 1}`} />
                </picture>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AlsoLike product={product} />

      <Selection />
    </div>
  );
}
