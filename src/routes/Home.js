import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Home.css";
function Home() {
  return (
    <div>
      <Header />
      <section className="banner">
        <div className="banner-image"> 
          <img alt="Band" src="img/image 1.png" /> 
        </div>
        <div className="banner-text">
          밴드 동아리 커뮤니티와 
          보컬 음성 분석 서비스를 한번에~!
        </div>
      </section>

      <section className="features">
        <h2>세션끼리 소통하고 싶다면?</h2>
        <div className="icons">
          <div className="icon">드럼</div>
          <div className="icon">기타</div>
          <div className="icon">보컬</div>
          <div className="icon">베이스</div>
          <div className="icon">키보드</div>
        </div>
      </section>
      <section className="posts">
        <h2>동아리 멤버 모집은 여기서!</h2>
        <div className="post-cards">
          <div className="post-card">밴드동아리 세션 모집글 1</div>
          <div className="post-card">밴드동아리 세션 모집글 2</div>
        </div>
      </section>
      <section className="concerts">
        <h2>연합 공연 관련 소식</h2>
        <div className="concert-cards">
          <div className="concert-card">Concert 1</div>
          <div className="concert-card">Concert 2</div>
          <div className="concert-card">Concert 3</div>
        </div>
      </section>
      <section className="analysis">
        <h2>음역대에 맞는 밴드 음악을 추천해드려요!</h2>
        <p>보컬의 음역대를 분석하여 음악대에 맞는 노래 추천 서비스 제공</p>
        <button>분석하러 가기</button>
      </section>
      <footer className="footer">
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

