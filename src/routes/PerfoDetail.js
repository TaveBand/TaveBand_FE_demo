import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BoardBtns from "../components/BoardBtns";
import Header from "../components/Header";
import "./PerfoDetail.css";

function PerfoDetail() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { post_id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/posts?post_id=${post_id}`
        );
        setDetail(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
        setLoading(false);
      }
    };
    getDetail();
  }, [post_id]);

  useEffect(() => {
    if (!loading) {
    //   console.log(detail);
    }
  }, [loading, detail]);
  return (
    <div className="BoardPage">
      <Header />
      <BoardBtns initialSelectedIndex={0} />
      <div className="Detailboard">
        <button
          className="Backbutton"
          onClick={() => navigate("/boards/union/performances")}
        >
          <img className="Backbutton" alt="Backbutton" src="/img/arrow.png" />
        </button>
        <img
          src="/img/basicprofile.png"
          alt="PerfoDetailimg"
          className="PerfoDetailimg"
        ></img>
        <div className="Contentbox">
          {/* 이렇게 작성해야 useState로 초기화 되고나서 렌더링해도 에러가 안뜸 */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            detail.length > 0 && (
              <>
                <h1>{detail[0].title}</h1>
                <div className="Userbox">
                  <img src="/img/basicprofile.png" className="Profileimg"></img>
                  <div>
                    <p>작성자</p>
                    <p style={{ color: "grey" }}>{detail[0].created_at}</p>
                  </div>
                </div>
                <div className="DetailText">{detail[0].content}</div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default PerfoDetail;
