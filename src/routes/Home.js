import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Home.css"
function Home() {
  return (
    <div className="MainContainer">
      <Header />
      <div className="Pbox">
        <p className="p1">밴드 동아리 커뮤니티와</p>
        <p className="p2">AI 편곡 서비스를 한 번에~!!!</p>
      </div>
      <div className="MainBackground">
        <img src="img/메인배경.jpg" alt="mainback" className="MainBackground"/>
      </div>
      <div className="MiniTitle">세션끼리 소통하고 싶다면?</div>
      <div className="Session">
        <button className="SessionBtn"><img src="img/drumicon.png" alt="drum"/>드럼</button>
        <button className="SessionBtn"><img src="img/guitaricon.png" alt="guitar"/>기타</button>
        <button className="SessionBtn"><img src="img/micicon.png" alt="mic"/>보컬</button>
        <button className="SessionBtn"><img src="img/bassicon.png" alt="bass" />베이스</button>
        <button className="SessionBtn"><img src="img/keyboardicon.png" alt="keyboard"/>키보드</button>
      </div>
      <div className="MiniTitle">동아리 멤버 모집은 여기서!</div>
      <div className="MiniTitle">연합 공연 관련 소식</div>
      <div className="MiniTitle">음역대에 맞는 밴드 음악을 추천해드려요!</div>
    </div>
    
  );
  
}
export default Home;