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

      <section className="mt-[64px] flex flex-col gap-[120px]">
        {dataC.map((e) => {
          return (
            <div key={e.name} className="w-[327px] flex flex-col items-center">
              <img
                src={e.categoryImage.mobile}
                alt={e.name}
                className="block md:hidden w-full"
              />

              <img
                src={e.categoryImage.tablet}
                alt={e.name}
                className="hidden md:block xl:hidden w-full"
              />

              <img
                src={e.categoryImage.desktop}
                alt={e.name}
                className="hidden xl:block w-full"
              />

              {e.new && (
                <span
                  className="mt-[32px] text-[#D87D4A] 
                  font-normal text-[14px] leading-[100%] tracking-[10px]"
                >
                  NEW PRODUCT
                </span>
              )}
              <h1 className="my-[24px] text-center font-bold text-[28px] leading-[100%] tracking-[1px]">
                {e.name}
              </h1>
              <p className="font-normal text-center opacity-[50%] text-[15px] leading-[25px] tracking-[0px]">
                {e.description}
              </p>
              <Link
                to={`/product?slug=${encodeURIComponent(e.slug)}`}
                className="px-[30px] mt-[24px] py-[15px] bg-[#D87D4A] text-white 
                inline-block font-bold text-[13px] leading-[100%] tracking-[1px] cursor-pointer"
              >
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
