import '../styles/userCard.css';
import user_logo from '../assets/profile-user.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function UserCard() {
  return (
    <div className="user_card">
      <img src={user_logo} className='user_logo' alt="User Logo" />
      <h3>username</h3>
      <h3>email@test.com</h3>
      <h3>job-type</h3>

      {/* Insights Button */}
      <div className="insights-button-container">
        <button className="insights-button">
          <i className="bi bi-lightbulb-fill"></i> Insights
        </button>
      </div>
    </div>
  );
}

export default UserCard;
