import React, { useState,useContext } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import MyContext from './App';
import { connect } from "react-redux";


const LoginForm = ({isLoggedIn,logout,login,saveUser}) => {
  console.log(isLoggedIn);
  

  const navigate = useNavigate();
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

    if (formData.password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    handleSignIn(formData.username, formData.password );
    // const response = await fetch('http://localhost:5000/api/signin', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
 
    // if (response.ok) {
    //   navigate('/partner-central');
    // } else {
    //   alert('Sign in failed');
    // }
    // Handle login logic (e.g., API call, authentication)
    // ...
  };
  const handleSignIn = async (username,password) => {
    const response = await fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username,password}),
    });
 
    if (response.ok) {
      const data = await response.json();
      navigate('/partner-central', { state: { username: data.username }});
      login();
      saveUser({payload:data.username});

    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Invalid Username or password' }));
      // alert('Sign in failed');
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
const mapStateToProps = (state) => ({
  isLoggedIn: state.counter.isLoggedIn
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: "LOGIN_SUCCESS" }),
  saveUser:(data)=>dispatch({ type: "SAVE",payload:data }),
  logout: () => dispatch({ type: "LOGOUT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
//export default LoginForm;