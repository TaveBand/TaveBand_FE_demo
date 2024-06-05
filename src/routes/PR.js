import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BoardBtns from "../components/BoardBtns";
import Pagenumber from "../components/Pagenumber";
import Toggle from "../components/Toggle";
import axios from "axios";
import "./PR.css";

function PR() {
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postPerPage = 8;


  const [loading, setLoading] = useState(false);

  // cd public
  //cd data
  //json-server --watch sample2.json --port 3002

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3002/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  },[]);

  useEffect(() => {
    const IndexLastPost = page * postPerPage;
    const IndexFirstPost = IndexLastPost - postPerPage;
    setCurrentPosts(posts.slice(IndexFirstPost, IndexLastPost));
  }, [posts, page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const [postlist, setPostlist] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (postId) => {
    console.log(postId.target)
    setSelectedPost(postId);
    // window.location.href = `/pr/${postId}`;
  };

  return (
    <div>
      <div className="BoardPage">
        <Header />
        <BoardBtns initialSelectedIndex={1} />

        <div className="PRBoards">
          <Toggle content="체크박스" />
          <div className="PRpost">
            {/* .slice(0, 8) */}
            {postlist &&
              currentPosts.map((post) => (
                <div key={post.post_id} className="PRbox" >
                  <Link to={`/boards/pr/${post.post_id}`} style={{ textDecoration: "none"}}>
                  <img
                    src="../img/basicprofile.png"
                    className="PRphoto"
                    alt="PRphoto"
                  ></img>
                  <div className="PRcontentbox">
                  
                  <h3>{post.nickname}</h3>
                    <p>{post.email}</p>
                    <div className="Sessioninfo">
                      {post.sessions[0].session_info}
                    </div>
                  </div>
                  </Link>
                  
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

export default PR;
