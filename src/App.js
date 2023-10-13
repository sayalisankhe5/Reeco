import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import DetailsHeader from "./components/DetailsHeader";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <DetailsHeader />
      <Cart />
    </>
  );
}

export default App;
