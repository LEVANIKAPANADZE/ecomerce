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
    <div>
      <div>
        <h1>{AudioTech?.toUpperCase()}</h1>
      </div>

      <section>
        {dataC.map((e) => {
          return (
            <div key={e.name}>
              <img src={e.categoryImage.tablet} alt="Headphone image" />
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
