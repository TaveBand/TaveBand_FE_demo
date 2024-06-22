/*
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ nickname }) => {
  const { user_id } = useParams();
  return (
    <div className="Sidebar">
      <div className="Profile-picture">
        <img src="/path/to/default-profile.png" alt="프로필 사진" />
      </div>
      <h2>{nickname}</h2>
      <Link to={`/profile/edit/${user_id}`} className="active">프로필 수정</Link>
      <Link to="/scrap">스크랩</Link>
      <Link to="/MyPost">내가 쓴 글</Link>
      <Link to="/MyReservations">공연 예약</Link>
    </div>
  );
};

export default Sidebar;

*/

/*
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ nickname }) => {
  return (
    <div className="sidebar">
      <div className="profile-picture">
        <img src="/path/to/profile-image" alt="Profile" className="profile-image" />
      </div>
      <h2>{nickname}</h2>
      <ul>
        <li className="active">프로필 수정</li>
        <li>스크랩</li>
        <li>내가 쓴 글</li>
        <li>공연 예약</li>
      </ul>
    </div>
  );
};

export default Sidebar;

*/


/*

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userId, nickname }) => {
  return (
    <div className="sidebar">
      <div className="profile-picture">
        <img src="/path/to/profile-image" alt="Profile" className="profile-image" />
      </div>
      <h2>{nickname}</h2>
      <ul>
        <li>
          <Link to={`/profile/edit/${userId}`} className="active">프로필 수정</Link>
        </li>
        <li>
          <Link to={`/scrap/${userId}`}>스크랩</Link>
        </li>
        <li>
          <Link to={`/myposts/${userId}`}>내가 쓴 글</Link>
        </li>
        <li>
          <Link to={`/reservations/${userId}`}>공연 예약</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
*/
/*

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userId, nickname }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="profile-picture">
        <img src="/path/to/profile-image" alt="Profile" className="profile-image" />
      </div>
      <h2>{nickname}</h2>
      <ul>
        <li className={location.pathname === `/profile/edit/${userId}` ? 'active' : ''}>
          <Link to={`/profile/edit/${userId}`}>프로필 수정</Link>
        </li>
        <li className={location.pathname === `/scrap/${userId}` ? 'active' : ''}>
          <Link to={`/scrap/${userId}`}>스크랩</Link>
        </li>
        <li className={location.pathname === `/myposts/${userId}` ? 'active' : ''}>
          <Link to={`/myposts/${userId}`}>내가 쓴 글</Link>
        </li>
        <li className={location.pathname === `/reservations/${userId}` ? 'active' : ''}>
          <Link to={`/reservations/${userId}`}>공연 예약</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

*/


import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userId, nickname }) => {
  return (
    <div className="sidebar">
      <div className="profile-picture">
        <img src="/path/to/profile-image" alt="Profile" className="profile-image" />
      </div>
      <h2>{nickname}</h2>
      <ul>
        <li>
          <Link to={`/profile/edit/${userId}`} className="profile-link">프로필 수정</Link>
        </li>
        <li>
          <Link to={`/scrap/${userId}`} className="scrap-link">스크랩</Link>
        </li>
        <li>
          <Link to={`/myposts/${userId}`} className="myposts-link">내가 쓴 글</Link>
        </li>
        <li>
          <Link to={`/reservations/${userId}`} className="reservations-link">공연 예약</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
