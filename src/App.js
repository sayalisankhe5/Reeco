import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import DetailsHeader from "./components/DetailsHeader";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Header />
      <DetailsHeader />
      <Cart />
    </Provider>
  );
}

export default App;
