import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import EmailVerification from "./routes/EmailVerification";
import Completed from "./routes/Completed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/EmailVerification" element={<EmailVerification />}></Route>
      <Route path="/Completed" element={<Completed />}></Route>
    </Routes>
  );
}

export default App;