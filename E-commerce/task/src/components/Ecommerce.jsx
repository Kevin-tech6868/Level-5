import React, { useState } from "react";
import Navbar from "./Navbar";
import Image1 from "../assets/Images/Acer nitro.jpg";
import Image2 from "../assets/Images/Asus Tuf-gaming.jpg";
import Image3 from "../assets/Images/Asus-rog.jpg";
import Image4 from "../assets/Images/HP Victus.jpg";
import Image5 from "../assets/Images/Lenovo Legion.jpg";

function App() {
  const products = [
    { id: 1, name: "Acer Nitro", image: Image1, price: "$1000", description: "Acer Nitro is a budget-friendly gaming series offering powerful performance, high refresh rate displays, and efficient cooling for casual and competitive gamers." },
    { id: 2, name: "Asus Rog", image: Image3, price: "$1200", description: "Known for high-performance laptops, desktops, motherboards, and peripherals designed for gamers and enthusiasts." },
    { id: 3, name: "Asus Tuf Gaming",image: Image2, price: "$1100", description:"A performance-focused gaming series designed for reliability, featuring military-grade build quality, high refresh rate displays, and efficient cooling." },
    { id: 4, name: "HP Victus", image: Image4, price: "$900", description:"HP Victus is a mid-range gaming laptop series offering balanced performance, sleek design, and high refresh rate displays for casual and competitive gamers." },
    { id: 5, name: "Lenovo Legion", image: Image5, price: "$1300", description:"A high-performance gaming series known for its powerful hardware, advanced cooling systems, and premium build quality, designed for serious gamers and creators." },
  ];


  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

 
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
 
      <Navbar cart={cart} toggleCart={() => setShowCart(!showCart)} />


      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">E-commerce Store</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <h3 className="text-gray-600">{product.description}</h3>
              <h2 className="text-gray-600 font-bold">{product.price}</h2>
              <button
                className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

 
      {showCart && (
        <div className="fixed top-20 right-5 bg-white shadow-lg p-4 rounded-lg w-72">
          <h2 className="text-xl font-bold mb-3">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded shadow">
                  <span>{item.name} - {item.price}</span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
