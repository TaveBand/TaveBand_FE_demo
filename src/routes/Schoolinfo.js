import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import "./Schoolinfo.css";

function Schoolinfo() {
    const navigate = useNavigate();
  function Back() {
    navigate("/signup");
      return;
    }
    function Finish() {
        navigate("/signup/finish");
          return;
      }
  return (
    <div>
      <Header />
      <div className="Schoolinfopage">
        <button className="BackBtn" onClick={Back}>
          <img className="BackBtn" alt="Back" src="../img/arrow.png" />
        </button>
        <div className="TitleSignup">회원가입</div>
        <div className="InputSchoolinfo">
          <p>학교 이메일 인증</p>
          <div className="Idbox">
            <input className="EmailInput" placeholder="  예:Daeil@band.ac.kr"></input>
            <button>인증요청</button>
          </div>
          <p>인증번호</p>
          <div className="Nicknamebox">
            <input className="CodeInput" placeholder="  인증번호 6자리를 입력해주세요"></input>
            <button>확인</button>
          </div>
        </div>
        <div>
          <button className="NextBtn" onClick={Finish}>완료</button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="../img/배경사진.jpg" />
      </div>
    </div>
  );
}

export default Schoolinfo;
