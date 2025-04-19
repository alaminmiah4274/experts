import Expert from "/src/component/Expert";
import Cart from "/src/component/Cart";

const ExpertApp = () => {
  return (
    <>
      <div className="bg-pink-100 text-center">
        <h1 className="text-4xl">Make A Cyber Secutrity Team</h1>
        <p>
          Our server is under attack so we need to hire a special cyber
          secutrity team
        </p>
        <h1 className="text-3xl">
          Total Budget: <span className="font-bold">10 Million</span>
        </h1>
      </div>
      <div>
        <Expert />
        <Cart />
      </div>
    </>
  );
};

export default ExpertApp;
