import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

// Import data file
import data from "./data";
console.log(data);

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{cards}</div>
      <Footer />
    </>
  );
}

export default App;
