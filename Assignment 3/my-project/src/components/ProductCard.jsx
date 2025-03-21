import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    toast.success(`${product.name} added!`);
  };

  return (
    <div style={styles.card}>
      <div style={styles.textContainer}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <button
          onClick={handleAdd}
          style={{
            ...styles.button,
            backgroundColor: isAdded ? "green" : "#eee",
            color: isAdded ? "white" : "black",
          }}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "10px",
    width: "60%",
    textAlign: "left",
    borderRadius: "20px",
    overflow: "hidden",
    background: "#fff",
  },
  textContainer: {
    flex: 1,
    padding: "10px",
  },
  imageContainer: {
    position: "relative",
    width: "200px",
    height: "200px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  button: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default ProductCard;
