import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default App;
