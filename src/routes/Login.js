import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    function ToSignup() {
        navigate("/signup");
        return;
      }
  return (
    <div>
      <Header />
      <div className="Loginpage">
        <div className="TitleLogin">로그인</div>
        <div className="InputLogin">
          <input placeholder="  아이디를 입력해주세요"></input>
          <input placeholder="  비밀번호를 입력해주세요"></input>
        </div>
        <div className="SubmitBtns">
          <button className="SignupBtn" onClick={ToSignup}>회원가입</button>
          <button className="LoginSubmit">로그인</button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/배경사진.jpg" />
      </div>
    </div>
  );
}

export default Login;
