import { useEffect, useState } from "react";
import './Post.css'

const Post = ({ posts, loading }) => {
    
  const [selectedPost, setSelectedPost] = useState(null);
  const handlePostClick = (postId) => {
    setSelectedPost(postId);
    window.location.href = `/union-performances/${postId}`;
  };
  if (loading) {
    return <h2>Loading . . .</h2>;
  }
  return (
    // <ul className="Clubpost">
    //   {posts.map((post) => (
    //     <li key={post.post_id} className="Postbox" onClick={handlePostClick}>
    //           <div className="clubimg">photo</div>
    //           <div className="contentbox">
    //           <h3>{post.title}</h3>
    //                 <p>
    //                   {post.content.length > 80
    //                     ? `${post.content.slice(0, 80)}...`
    //                     : post.content}
    //                 </p>
    //                 <div className="Likebox">
    //                   <img
    //                     className="Likes"
    //                     src="/img/Likes.png"
    //                     alt="Likes"
    //                   ></img>
    //                   <p className="Likenum">507</p>
    //                 </div>

    //                 <p className="Posttime">작성날짜 {post.created_at}</p>
    //               </div>
    //     </li>
    //   ))}
      // </ul>
      <div></div>
  );
};

export default Post;