import { Link } from 'react-router-dom';
import axios from 'axios';
import './User.css';
import { useAuth } from '../../helpers/Auth';

const UserDelete = () => {
  const { user, onLogout } = useAuth();

  const formSubmit = () => {
    const apiURL = `http://localhost:3001/api/v1/user/${user._id}/delete`;

    axios.post(apiURL).then(
      (res) => onLogout(),
      (err) => console.log(err)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  };

  return (
    <main>
      <h1>Delete account</h1>

      <p>Are you sure you want to delete your bitblog account?</p>
      <p><strong>Your blog posts will also be deleted.</strong></p>

      <form onSubmit={(e) => handleSubmit(e)} className='PostForm'>
        <div className='ButtonGroup'>
          <button className='Btn PrimaryBtn'>Delete</button>
          <Link to='/dashboard' className='Btn SecondaryBtn'>Cancel</Link>
        </div>
      </form>
    </main>
  ); 
};

export default UserDelete;
