import { useState, useEffect } from "react";
import data from "../../data.json";

export default function Home() {
  const [requestedTech, setRequestedTech] = useState<any | null>(null);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * data.length);
      setRequestedTech(data[index]);
    }, 3500);

    return () => clearInterval(interval);
  }, [data]);

  if (!requestedTech) {
    return <p>Loading...</p>;
  }

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
