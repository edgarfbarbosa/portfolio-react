import "./assets/css/base/base.css"
import "./assets/css/base/reset.css"
import Navbar from "./components/navbar";
import Home from "./components/home"
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App