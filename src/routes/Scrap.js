import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";
import "./Scrap.css";

function Scrap() {
  const { user_id } = useParams();
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    const fetchScraps = async () => {
      try {
        const response = await axios.get(`/dailband/user/${user_id}/scraps`);
        setScraps(response.data);
      } catch (error) {
        console.error("Failed to fetch scraps:", error);
      }
    };

    fetchScraps();
  }, [user_id]);

  const handleDelete = (postId) => {
    axios.delete(`/dailband/user/${user_id}/scraps/${postId}`)
      .then(() => {
        setScraps(scraps.filter(scrap => scrap.post_id !== postId));
      })
      .catch(error => {
        console.error('There was an error deleting the scrap!', error);
      });
  };

  return (
    <div className="ScrapsPage">
      <Header />
      <div className="Sidebar">
        <h2>윤영선</h2>
        <Link to="/profile/edit/:user_id">프로필 수정</Link>
      <Link to="/scrap">스크랩</Link>
      <Link to="/MyPost">내가 쓴 글</Link>
      <Link to="/MyReservations">공연 예약</Link>
     
      </div>
      <div className="Content">
        <h2>스크랩</h2>
        <div className="ScrapsList">
          {scraps.map((scrap) => (
            <div key={scrap.post_id} className="ScrapItem">
              <h3>{scrap.title}</h3>
              <p>{scrap.content}</p>
              <p><strong>작성자:</strong> {scrap.nickname}</p>
              <p>작성 날짜: {new Date(scrap.created_at).toLocaleDateString()}</p>
              <button onClick={() => handleDelete(scrap.post_id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scrap;