import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import "./Signupfinish.css";

function Schoolinfo() {
  const navigate = useNavigate();
  function Back() {
    navigate("/login");
    return;
  }

  return (
    <div>
      <Header />
      <div className="Schoolinfopage">
        <img className="Clapimg" src="../img/clap.png" />
        <div className="Finishment">
          <p>회원가입을</p>
          <p>축하드립니다!</p>
        </div>
        <div>
          <button className="GotoLogin" onClick={Back}>
            로그인 페이지로
          </button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="../img/배경사진.jpg" />
      </div>
    </div>
  );
}

export default Schoolinfo;
