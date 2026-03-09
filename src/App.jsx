import { Routes, Route } from 'react-router-dom'
import Pdp from "./Screens/Pdp.jsx"
import './index.css'
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import ProductData from "./Components/ProductData.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Pdp />} />
    </Routes>
  )
}

export default App
