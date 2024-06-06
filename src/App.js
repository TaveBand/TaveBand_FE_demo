import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Verify from "./routes/Verify";
import Complete from "./routes/Complete";
import Clubs from "./routes/Clubs";
import PR from "./routes/PR";
import Performances from "./routes/Performances";
import ClubsDetail from "./routes/ClubsDetail";
import PRDetail from "./routes/PRDetail";
import PerfoDetail from "./routes/PerfoDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/register/verify" element={<Verify />}></Route>
      <Route path="/register/complete" element={<Complete />}></Route>
      <Route path="/boards/clubs" element={<Clubs />}></Route>
      <Route path="/boards/clubs/:post_id" element={<ClubsDetail />}></Route>
      <Route path="/boards/pr" element={<PR />}></Route>
      <Route path="/boards/pr/:post_id" element={<PRDetail />}></Route>
      <Route path="/boards/union/performances" element={<Performances />}></Route>
      <Route path="/boards/union-performances/:post_id" element={<PerfoDetail />}></Route>

    </Routes>
  );
}

export default App;
