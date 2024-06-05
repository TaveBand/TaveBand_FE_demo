import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import BoardBtns from "../components/BoardBtns";
import Pagenumber from "../components/Pagenumber";
import "./Clubs.css";

function Clubs() {
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const [postPerPage] = useState(3);

  const IndexLastPost = page * postPerPage;
  const IndexFirstPost = IndexLastPost - postPerPage;
  const [loading, setLoading] = useState(false);

  // cd public
  //cd data
  //json-server --watch sample0.json --port 3003

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3003/posts");
      setPosts(res.data);
      setCurrentPosts(posts.slice(IndexFirstPost, IndexLastPost));
      setLoading(false);
    };
    fetchPosts();
  }, [currentPosts, IndexFirstPost, IndexLastPost, page]);
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (postId) => {
    setSelectedPost(postId);
    window.location.href = `/clubs/${postId}`;
  };

  return (
    <div>
      <div className="BoardPage">
        <Header />
        <BoardBtns initialSelectedIndex={0} />
        <div className="Boards">
          <div className="Clubpost">
            {currentPosts.slice(0, 3).map((post) => (
              <div key={post.post_id} className="Postbox" onClick={handlePostClick}>
                <div className="clubimg">photo</div>
                <div className="contentbox">
                  <h3>{post.title}</h3>
                  <p>
                    {post.content.length > 80
                      ? `${post.content.slice(0, 80)}...`
                      : post.content}
                  </p>
                  <div className="Likebox">
                    <img
                      className="Likes"
                      src="/img/Likes.png"
                      alt="Likes"
                    ></img>
                    <p className="Likenum">507</p>
                  </div>

                  <p className="Posttime">작성날짜 {post.created_at}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagenumber
            totalCount={posts.length}
            page={page}
            postPerPage={postPerPage}
            pageRangeDisplayed={10}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Clubs;
