import React, { useState } from 'react';
import './index.css';
import { useNavigate, useLocation } from 'react-router-dom';
import PartnerSignInComponent from './PartnerSigninModal'

const PartnerLoginForm = ({partnerNameget,partnerAlready,onDataFromChild }) => {

  // const parentData = useState({
  //   modalValue: '',
  //   updatedpartners: []
  // })
  const navigate = useNavigate();
  const location = useLocation();
  const partnerName = location.state?.partnerName || '';
  const previousUsername = location.state?.username || '';
  const [updatedList, setUpdatedList] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data (you can add more validation rules)
    if (!formData.username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }

    if (formData.password.length < 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    handleSignIn(formData.username, formData.password,onDataFromChild );

  };
  const handleSignIn = async (username,password,onDataFromChild) => {
    const response = await fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      if (partnerNameget) {
        const linkAccountResponse = await fetch('http://localhost:5000/api/link-account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: previousUsername, partnerName:partnerNameget.name }),
        });

        if (linkAccountResponse.ok) {
          console.log(partnerAlready)
          setUpdatedList(partnerAlready =>
            partnerAlready.map(partner =>
              partner.name === partnerNameget.name
                ? { ...partner, isLinked: true, AccruedAwards: 'Complementary Gold status, 15 Elite night credits' }
                : partner
            )
          );
          //parentData.modalValue = false
          //parentData.updatedpartners = updatedList 
          onDataFromChild(false, updatedList);
          //navigate('/partner-central', { state: { username: previousUsername } });
        } else {
          alert('Failed to link account');
        }
      } else {
        onDataFromChild(false);
       // navigate('/partner-central', { state: { username: data.username } });
      }
    } else {
      alert('Sign in failed');
    }
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className='inputUsernameBox'
          value={formData.username}
          onChange={handleChange}
        />
        <p className="error">{errors.username}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className='inputUsernameBox'
          value={formData.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <button type="submit" className='buttonWidth'>Login</button>
      </form>
    </div>
  );
};

export default PartnerLoginForm;