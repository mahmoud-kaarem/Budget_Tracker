import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/userCard.css'; 
import user_logo from '../assets/profile-user.png';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function UserCard() {
  const navigate = useNavigate();

  const handleInsightsClick = () => {
    navigate('/insights'); 
  };

  return (
    <div className="user_card">
      <img src={user_logo} className="user_logo" alt="User Logo" />
      <h3>username</h3>
      <h3>email@test.com</h3>
      <h3>job-type</h3>

      <div className="insights-button-container">
        <button className="insights-button" onClick={handleInsightsClick}>
          <i className="bi bi-lightbulb-fill"></i> Insights
        </button>
      </div>
    </div>
  );
}

export default UserCard;
