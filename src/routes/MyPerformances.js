// src/routes/MyPerformances.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyPerformances.css';

function MyPerformances() {
  const [performances, setPerformances] = useState([]);
  const userId = sessionStorage.getItem('user_id'); // 세션에서 user_id 가져오기

  useEffect(() => {
    if (userId) {
      axios.get(`/dailband/user/myperformances`)
        .then(response => {
          setPerformances(response.data);
        })
        .catch(error => {
          console.error('Error fetching performances:', error);
        });
    }
  }, [userId]);

  const handleDelete = (performanceId) => {
    axios.delete(`/dailband/performance/${performanceId}`)
      .then(response => {
        setPerformances(performances.filter(performance => performance.performance_id !== performanceId));
      })
      .catch(error => {
        console.error('Error deleting performance:', error);
      });
  };

  return (
    <div className="MyPerformancesPage">
      <h2>내가 작성한 공연</h2>
      <div className="PerformancesGrid">
        {performances.map(performance => (
          <div className="PerformanceCard" key={performance.performance_id}>
            <img src={performance.image_url} alt={performance.title} className="PerformanceImage" />
            <div className="PerformanceDetails">
              <div className="PerformanceDate">{new Date(performance.date).toLocaleDateString()} {performance.time}</div>
              <div className="PerformanceTitle">{performance.title}</div>
              <button className="DeleteButton" onClick={() => handleDelete(performance.performance_id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
      <div className="Pagination">
        <span>1 2 3 4 5 6 7 8 9 10 </span>
      </div>
    </div>
  );
}

export default MyPerformances;