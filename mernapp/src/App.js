import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContexReducer";
import MyOrders from "./screens/MyOrders";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path="/myOrders" element={<MyOrders />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
