import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import EmailVerification from "./routes/EmailVerification";
import Completed from "./routes/Completed";
import ProfileEdit from "./routes/ProfileEdit";
import Scrap from "./routes/Scrap";
import MyPosts from "./routes/MyPost";
import MyPerformances from './routes/MyPerformances';
import MyReservations from './routes/MyReservations';
import MyPost from "./routes/MyPost";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/EmailVerification" element={<EmailVerification />}></Route>
      <Route path="/Completed" element={<Completed />}></Route>
      <Route path="/profile/edit/:user_id" element={<ProfileEdit />}></Route>
      <Route path="/Scrap" element={<Scrap />}></Route>
      <Route path="/MyPost" element={<MyPost />}></Route>
      <Route path="/performances" element={<MyPerformances />}></Route>
      <Route path="/MyReservations" element={<MyReservations />}></Route>


  
    </Routes>
  );
}

export default App;