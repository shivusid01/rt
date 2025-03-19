import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    toast.success(`${product.name} added!`); // ✅ Fixed template literal syntax
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-32 h-32 object-cover rounded-md" 
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <button
        onClick={handleAdd}
        className={`mt-2 px-4 py-2 rounded-md ${
          added ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {added ? "Added" : "Add"}
      </button>
    </div>
  );
};

export default Card;
