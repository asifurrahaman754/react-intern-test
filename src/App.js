import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Success from "components/Success";
import Cart from "routes/Cart";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart/checkout" exact element={<Cart />} />
        <Route path="/success" exact element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
