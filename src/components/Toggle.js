import React, { useState } from "react";
import "./Toggle.css";

function Toggle({ content }) {
  const [isCheck, setisCheck] = useState(false);

  const handleToggle = () => {
    setisCheck(!isCheck);
  };

  return (
    <div className="Sessiontoggle">
      <div className="ToggleBtn">
        <div className="Togglename">세션 조건</div>
        <button
          className="OpenBtn"
          onClick={() => {
            setisCheck((e) => !e);
          }}
        >
          {isCheck ? (
            <img src="/img/leftarrow.png"></img>
          ) : (
            <img src="/img/rightarrow.png"></img>
          )}
        </button>
      </div>
      {isCheck && (
        <div className="Sessionbox">
          <div className="SessionBtn">
            <input type="checkbox" value={1}></input>
            <p>드럼</p>
          </div>
          <div className="SessionBtn">
            <input type="checkbox" value={2}></input>
            <p>기타</p>
          </div>
          <div className="SessionBtn">
            <input type="checkbox" value={3}></input>
            <p>보컬</p>
          </div>
          <div className="SessionBtn">
            <input type="checkbox" value={4}></input>
            <p>베이스</p>
          </div>
          <div className="SessionBtn">
            <input type="checkbox" value={5}></input>
            <p>키보드</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Toggle;
