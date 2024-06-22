  import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
  import Login from "./routes/Login";
  import Signup from "./routes/Signup";
  import Home from "./routes/Home";
  import EmailVerification from "./routes/EmailVerification";
  import Completed from "./routes/Completed";
  import Profile from "./routes/Profile";





  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/EmailVerification" element={<EmailVerification />}></Route>
        <Route path="/Completed" element={<Completed />}></Route>
        <Route path="/profile/edit/:user_id" element={<Profile />}></Route>



    
      </Routes>
    );
  }

  export default App;

  /*        <Route path="/MyPost/user_id" element={<MyPost />}></Route>
        <Route path="/MyPerformances/user_id" element={<MyPerformances />}></Route>
        <Route path="/MyReservations/user_id" element={<MyReservations />}></Route>
         <Route path="/Scrap/:user_id" element={<Scrap />}></Route>*/