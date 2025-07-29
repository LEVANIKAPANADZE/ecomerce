import { useState } from "react";
import data from "../../data.json";
import { useEffect } from "react";

export default function Home({ id }: { id: string }) {
  const [requestedTech, setRequestedTech] = useState(data[0]);
  console.log(id);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * data.length);
      setRequestedTech(data[index]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <img
          src={requestedTech.image.mobile}
          alt="Tech's image"
          className="h-[300px] w-[300px]"
        />
        <h2>You may like this</h2>
        <h1>{requestedTech.name}</h1>
        <p>{requestedTech.description}</p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
}
