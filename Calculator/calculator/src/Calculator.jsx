import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(value + e.target.value);
  };

  const clear = () => setValue("");
  const deleteLast = () => setValue(value.slice(0, -1));
  const evaluateResult = () => {
    try {
      setValue(eval(value).toString()); 
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">

        <input
          type="text"
          value={value}
          readOnly
          className="w-full text-right p-4 text-2xl bg-gray-700 text-white rounded-md mb-4"
        />


        <div className="grid grid-cols-4 gap-3">

          <button className="btn bg-red-500" onClick={clear}>
            AC
          </button>
          <button className="btn bg-yellow-500" onClick={deleteLast}>
            DEL
          </button>
          <button className="btn bg-blue-500" onClick={handleChange} value=".">
            .
          </button>
          <button className="btn bg-blue-500" onClick={handleChange} value="/">
            ÷
          </button>


          {[7, 8, 9, "*", 4, 5, 6, "+", 1, 2, 3, "-"].map((item) => (
            <button
              key={item}
              className={`btn ${
                isNaN(item) ? "bg-blue-500" : "bg-gray-600"
              }`}
              onClick={handleChange}
              value={item}
            >
              {item}
            </button>
          ))}


          <button className="btn bg-gray-600" onClick={handleChange} value="00">
            00
          </button>
          <button className="btn bg-gray-600" onClick={handleChange} value="0">
            0
          </button>
          <button className="btn col-span-2 bg-green-500" onClick={evaluateResult}>
            =
          </button>
        </div>
      </div>


      <style>
        {`
          .btn {
            padding: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            border-radius: 8px;
            transition: transform 0.1s ease-in-out;
          }
          .btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Calculator;
