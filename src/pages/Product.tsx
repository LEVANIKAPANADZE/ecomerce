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
    <div>
      <span onClick={() => navigate(-1)}>Go Back</span>

      <main>
        <div>
          <img src={product.categoryImage.mobile} alt={product.name} />
          {product.new && <p>NEW PRODUCT</p>}
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>

        <div>
          <div>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
          <button>ADD TO CART</button>
        </div>
      </main>

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

      <Selection />
    </div>
  );
}
