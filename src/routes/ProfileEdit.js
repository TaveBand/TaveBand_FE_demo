import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./ProfileEdit.css";
import { Link } from "react-router-dom";

function ProfileEdit() {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1; // 예시: 실제 사용자 ID로 변경
        const response = await axios.get(`/dailband/user/${userId}/profile`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, role: [...prevData.role, value] };
      } else {
        return { ...prevData, role: prevData.role.filter((role) => role !== value) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = 1; // 예시: 실제 사용자 ID로 변경
      await axios.put(`/dailband/user/${userId}/profile`, formData);
      alert("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error(error);
      alert("프로필 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="ProfileEdit">
      <Header />
      <div className="Sidebar">
      <h2>윤영선</h2>
      <Link to="/profile/edit/:user_id">프로필 수정</Link>
      <Link to="/scrap">스크랩</Link>
      <Link to="/MyPost">내가 쓴 글</Link>
      <Link to="/MyReservations">공연 예약</Link>
    </div>
      <div className="Content">
        <h2>마이페이지</h2>
        <form onSubmit={handleSubmit}>
          <div className="InputField">
            <label>닉네임</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>
          <div className="InputField">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="InputField">
            <label>비밀번호 변경</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="InputField">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </div>
          <div className="CheckboxGroup">
            <label>
              <input
                type="checkbox"
                name="role"
                value="드럼"
                checked={formData.role.includes("드럼")}
                onChange={handleCheckboxChange}
              />
              드럼
            </label>
            <label>
              <input
                type="checkbox"
                name="role"
                value="기타"
                checked={formData.role.includes("기타")}
                onChange={handleCheckboxChange}
              />
              기타
            </label>
            <label>
              <input
                type="checkbox"
                name="role"
                value="보컬"
                checked={formData.role.includes("보컬")}
                onChange={handleCheckboxChange}
              />
              보컬
            </label>
            <label>
              <input
                type="checkbox"
                name="role"
                value="베이스"
                checked={formData.role.includes("베이스")}
                onChange={handleCheckboxChange}
              />
              베이스
            </label>
            <label>
              <input
                type="checkbox"
                name="role"
                value="키보드"
                checked={formData.role.includes("키보드")}
                onChange={handleCheckboxChange}
              />
              키보드
            </label>
          </div>
          <button type="submit" className="UpdateButton">수정</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
