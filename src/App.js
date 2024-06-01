import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import Schoolinfo from "./routes/Schoolinfo";
import Signupfinish from "./routes/Signupfinish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signup/schoolinfo" element={<Schoolinfo />}></Route>
      <Route path="/signup/finish" element={<Signupfinish />}></Route>
    </Routes>
  );
}

export default App;
