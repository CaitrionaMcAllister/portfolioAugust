import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Caitriona McAllister",
    location: "London, UK",
    email: "caitriona.mcallister1@gmail.com",
    availability: "Open for work",
    brand:
      "Through the fusion of design and technology, I strive to create immersive and interactive experiences that challenge traditional notions of art. Creative coding and emerging technologies allow me to manipulate and experiment with data to create visually stunning and thought provoking pieces of work. I invite viewers to reimagine the potential of technology as a new artistic medium. Let's grab a coffee and chat",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
