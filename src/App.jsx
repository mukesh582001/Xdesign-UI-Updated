import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditRoom from "./pages/EditRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:room" element={<EditRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
