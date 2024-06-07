import React, { useEffect, useState } from 'react';
import './Scraps.css';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";




const Scraps = () => {
  const [Scraps, setScraps] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetching the data from the JSON file
    fetch('/Scraps.json')
      .then(response => response.json())
      .then(data => setScraps(data))
      .catch(error => console.error('Error fetching Scraps:', error));
  }, []);

  const handlePostClick = (pid) => {
    const post = Scraps.find(p => p.pid === pid);
    setSelectedPost(post);
  };

  return (
    <div className="Scraps-container">
      <div className="sidebar">
        <div className="profile-pic-placeholder"></div>
        <h2>윤영선</h2>
        <ul>
          <li onClick={() => handlePostClick(1)}>프로필 수정</li>
          <li onClick={() => handlePostClick(2)}>스크랩</li>
          <li>내가 쓴 글</li>
          <li>공연 예약</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>게시글</h1>
        {selectedPost ? (
          <div className="post">
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <div className="post-footer">
              <span>작성자: {selectedPost.author}</span>
              <span>작성날짜: {selectedPost.date}</span>
              <span>좋아요: {selectedPost.likes}</span>
              <span>댓글: {selectedPost.comments}</span>
            </div>
          </div>
        ) : (
          <p>게시글을 선택해주세요.</p>
        )}
      </div>
    </div>
  );
};

export default Scraps;