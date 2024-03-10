import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div className="relative">
        <div className="bg-slate-900 fixed top-0 z-[100] w-screen">
          <Navbar/>
        </div>

        <br/>
        <br/>
        <br/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;
