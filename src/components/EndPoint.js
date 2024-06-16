import Comment from "../components/Comment";

function ExampleComponent() {
  const post_id = "example_post_id";
  const refreshComments = () => {
    // Logic to refresh comments
  };

  return (
    <div>
      {/* 동아리 모집 게시판 엔드포인트: posts_1  */}
      <Comment post_id={post_id} endpoint="/posts1_1" refreshComments={refreshComments} />

      {/* 자기 PR 게시판 엔드포인트 : posts2_1 */}
      <Comment post_id={post_id} endpoint="/posts2_1" refreshComments={refreshComments} />

      {/* 연합 공연 모집 게시판 엔드포인트 : posts3_1 */}
      <Comment post_id={post_id} endpoint="/posts3_1" refreshComments={refreshComments} />
    </div>
  );
}

export default ExampleComponent;