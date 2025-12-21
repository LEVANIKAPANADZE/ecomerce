import { useParams, useNavigate } from "react-router-dom";
import data from "../../data.json";
import { useState, useEffect } from "react";
import AudioSel from "../components/AudioTechSel";
import { Link } from "react-router-dom";

export default function AudioTech() {
  const { AudioTech } = useParams();
  const navigate = useNavigate();
  const [dataC, setDataC] = useState([] as any[]);

  useEffect(() => {
    const categoryData = data.filter(
      (item) => item.category === AudioTech?.toLowerCase()
    );

    if (categoryData.length === 0) {
      let alreadyRedirected = sessionStorage.getItem("redirected");

      if (!alreadyRedirected) {
        alert("Category not found, Redirecting to Home page.");
        sessionStorage.setItem("redirected", "true");
        navigate("/home");
      }
    } else {
      sessionStorage.removeItem("redirected");
      setDataC(categoryData);
    }
  }, [AudioTech, navigate]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-black text-white w-[100%] flex items-center justify-center px-[84px] py-[32px]">
        <h1 className="font-bold text-[28px] leading-[100%] tracking-[2px]">
          {AudioTech?.toUpperCase()}
        </h1>
      </div>

      <section className="mt-[64px]">
        {dataC.map((e) => {
          return (
            <div key={e.name} className="w-[327px]">
              <img
                src={e.categoryImage.mobile}
                alt={e.name}
                className="block md:hidden w-full"
              />

              <img
                src={e.categoryImage.tablet}
                alt={e.name}
                className="hidden md:block desktop:hidden w-full"
              />

              <img
                src={e.categoryImage.desktop}
                alt={e.name}
                className="hidden desktop:block w-full"
              />

              {e.new && <span>NEW PRODUCT</span>}
              <h1>{e.name}</h1>
              <p>{e.description}</p>
              <Link to={`/product?slug=${encodeURIComponent(e.slug)}`}>
                SEE PRODUCT
              </Link>
            </div>
          );
        })}
      </section>

      <AudioSel />
    </div>
  );
}
