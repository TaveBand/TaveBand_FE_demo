import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import './MyPost.css';

function MyPost() {
  const { user_id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user_id) {
      axios.get(`/dailband/user/${user_id}/posts`)
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }, [user_id]);

  const handleDelete = (postId) => {
    axios.delete(`/dailband/post/${postId}`)
      .then(response => {
        setPosts(posts.filter(post => post.post_id !== postId));
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div className="MyPostsPage">
      <Header />
      <div className="Sidebar">
        <h2>윤영선</h2>
        <Link to={`/profile/edit/${user_id}`}>프로필 수정</Link>
        <Link to="/scrap">스크랩</Link>
        <Link to="/MyPost">내가 쓴 글</Link>
        <Link to="/MyReservations">공연 예약</Link>
      </div>
      <div className="Content">
        <h2>내가 작성한 글</h2>
        <div className="PostsList">
          {posts.map(post => (
            <div className="PostCard" key={post.post_id}>
              <div className="PostHeader">
                <div className="PostBoard">{post.board_id} 게시판</div>
                <button className="DeleteButton" onClick={() => handleDelete(post.post_id)}>삭제</button>
              </div>
              <div className="PostBody">
                <div className="PostTitle">{post.title}</div>
                <div className="PostContent">{post.content}</div>
              </div>
              <div className="PostFooter">
                <div className="PostAuthor">{post.nickname}</div>
                <div className="PostDate">작성날짜 {new Date(post.created_at).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPost;