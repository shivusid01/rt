import ProductList from "./components/ProductList";

const topProducts = [
  {
    id: 1,
    name: "Italian Mozzarella Bowl",
    description: "Cherry tomatoes, basil, mozzarella...",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754", 
  },
  {
    id: 2,
    name: "Spicy Basil Shrimp",
    description: "Hot roasted shrimp, honey sauce...",
    image: "https://images.unsplash.com/photo-1718942899945-a483caa804d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpY3klMjBCYXNpbCUyMFNocmltcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Roasted Veg Bowl",
    description: "Black sherry roasted vegetables...",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  },
];

const featuredProducts = [
  {
    id: 4,
    name: "Crispy Salmon Bowl",
    description: "$3.69",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
  {
    id: 5,
    name: "Steak Bowl",
    description: "$3.69",
    image: "https://images.unsplash.com/photo-1598577789978-b87168a57b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3RlYWslMjBCb3dsfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Vegan Protein Bowl",
    description: "$3.69",
    image: "https://plus.unsplash.com/premium_photo-1664648005742-0c360f4910b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnYW4lMjBQcm90ZWluJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Avocado Egg Bowl",
    description: "$3.69",
    image: "https://images.unsplash.com/photo-1625479356432-48bfff9b98ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEF2b2NhZG8lMjBFZ2clMjBCb3dsfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    name: "Avocado Egg Bowl",
    description: "$3.69",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
];

const App = () => {
  return (
    <div style={{ padding: "20px",  }}>
      <ProductList title="Based on your search" products={topProducts} />
      <ProductList title="Featured Items" products={featuredProducts} />
    </div>
  );
};

export default App;