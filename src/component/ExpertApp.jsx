import axios from "axios";
import { useState, useEffect } from "react";
import Expert from "/src/component/Expert";
import Cart from "/src/component/Cart";

const ExpertApp = () => {
  const [experts, setExperts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("experts_data.json").then((data) => setExperts(data.data));
  }, []);

  const addExpert = (data) => {
    const existingExpert = cart.find((expert) => expert.name === data.name);

    if (existingExpert) {
      setError("already added");
    } else {
      setCart([
        ...cart,
        { name: data.name, salary: parseInt(data.salary), img: data.img },
      ]);
      setError("");
    }
  };

  return (
    <>
      <div className="bg-pink-100 text-center py-5">
        <h1 className="text-4xl">Make A Cyber Secutrity Team</h1>
        <p>
          Our server is under attack so we need to hire a special cyber
          secutrity team
        </p>
        <h1 className="text-3xl">
          Total Budget: <span className="font-bold">10 Million</span>
        </h1>
      </div>

      {/* COMPONENTS */}
      <div className="flex gap-5 my-8">
        <div className="w-3/4">
          <Expert experts={experts} addExpert={addExpert} />
        </div>

        <div className="w-1/4">
          <Cart cart={cart} error={error} />
        </div>
      </div>
    </>
  );
};

export default ExpertApp;
