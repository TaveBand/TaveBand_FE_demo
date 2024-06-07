import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";
import "./MyReservations.css";

function MyReservations() {
  const { user_id } = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`/dailband/user/${user_id}/reservations`);
        setReservations(response.data);
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchReservations();
  }, [user_id]);

  const handleCancel = (reservationId) => {
    axios.delete(`/dailband/user/${user_id}/reservations/${reservationId}`)
      .then(() => {
        setReservations(reservations.filter(reservation => reservation.id !== reservationId));
      })
      .catch(error => {
        console.error('There was an error canceling the reservation!', error);
      });
  };

  return (
    <div className="ReservationsPage">
      <Header />
      <div className="Sidebar">
        <h2>윤영선</h2>
        <Link to={`/profile/edit/${user_id}`}>프로필 수정</Link>
        <Link to="/scrap">스크랩</Link>
        <Link to="/MyPost">내가 쓴 글</Link>
        <Link to="/MyReservations">공연 예약</Link>
      </div>
      <div className="Content">
        <h2>예약한 공연 정보</h2>
        <div className="ReservationsList">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="ReservationItem">
              <h3>{reservation.title}</h3>
              <p>공연 날짜: {new Date(reservation.date).toLocaleDateString()}</p>
              <p>공연 장소: {reservation.location}</p>
              <p>예약 매수: {reservation.ticket_count}</p>
              <button onClick={() => handleCancel(reservation.id)}>예약 취소</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReservations;