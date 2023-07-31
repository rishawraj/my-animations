import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typing } from "./components/Typing/Typing";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typing" element={<Typing />} />
      </Routes>
    </Router>
  );
}

export default App;
