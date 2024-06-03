import PropTypes from "prop-types";
import './User.css'


const User = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <p>{user.address.street}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
