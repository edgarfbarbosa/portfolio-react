import "./App.css"
import "./assets/css/base/reset.css"
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App