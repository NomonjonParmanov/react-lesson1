import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Covid from "./components/covid/Covid";
import Article from "./components/article/Article";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Covid />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
