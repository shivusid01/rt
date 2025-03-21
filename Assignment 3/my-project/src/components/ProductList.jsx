import ProductCard from "./ProductCard";

const ProductList = ({ title, products }) => {
  return (
    <div>
          <h2 style={{ fontWeight: "bold", fontSize: "30px", margin: "10px" }}>{title}</h2>
      <div style={{ display: "flex", gap: "30px", overflowX: "auto" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;