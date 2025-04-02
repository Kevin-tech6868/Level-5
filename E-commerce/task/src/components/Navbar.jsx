import React from "react";

function Navbar({ cart, toggleCart }) {
  return (
    <nav className="bg-pink-900 text-white p-8 shadow-lg text-2xl font-normal">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-white">E-Commerce Platform</h1>

        {/* 🛒 Click to Show/Hide Cart */}
        <h1 className="font-semibold text-orange-500 cursor-pointer" onClick={toggleCart}>
          Cart ({cart.length})
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;

