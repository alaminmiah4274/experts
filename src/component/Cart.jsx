const Cart = ({ cart = [], error }) => {
  const totalCost = cart.reduce((total, expert) => total + expert.salary, 0);

  return (
    <div className="bg-gray-200 rounded-md py-5 text-center">
      {cart.length > 0 ? (
        // cart items
        <div className="px-2">
          <p>Expert Added: {cart.length}</p>
          <p>Total Cost: ${totalCost}</p>

          <div className="my-8">
            {cart.map((expert, idx) => (
              <div key={idx} className="bg-white mb-3">
                <div className="flex items-center gap-x-15">
                  <img src={expert.img} alt="" className="w-1/5" />
                  <p>{expert.name}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full px-2 py-1 bg-blue-500 text-white rounded-sm">
            Confirm List
          </button>
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
      ) : (
        <div>
          <p>No Experts Added</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
