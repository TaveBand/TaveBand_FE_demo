import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup() {
    const navigate = useNavigate();
    function Back() {
        navigate("/login");
        return;
      }

  return (
      <div>
      <Header />
      <div className="Signuppage">
        <button className="BackBtn" onClick={Back}>
        <img className="BackBtn" alt="Back" src="img/arrow.png"/>
        </button>
        <div className="TitleSignup">회원가입</div>
        <div className="InputSignup">
          <p>아이디</p>
          <div className="Idbox">
            <input placeholder="  아이디를 입력해주세요"></input>
            <button>중복확인</button>
          </div>
          <p>닉네임</p>
          <div className="Nicknamebox">
            <input placeholder="  닉네임을 입력해주세요"></input>
            <button>중복확인</button>
          </div>
          <p>비밀번호</p>
          <input placeholder="  비밀번호를 입력해주세요"></input>
          <p>비밀번호 확인</p>
          <input placeholder="  비밀번호 재입력"></input>
        </div>
        <div>
          <button className="NextBtn">다음</button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/배경사진.jpg" />
      </div>
    </div>
  );
}

export default Signup;
