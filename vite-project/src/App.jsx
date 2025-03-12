import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Card from "./Card";
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        {/* <Card title="card 1" description= "card 2 desc" />
        <Card title="card 2" description= "card 2 desc" />
        <Card title="card 3" description= "card 2 desc" />
        <Card title="card 4" description= "card 2 desc" /> */}
       
      </div>
      <Footer />
    </>
  );
}

export default App;
