import React,{ useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import YourComponent from './SigninModal';
import MyContext from './App';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
function TopNavBar({isLoggedIn,savedUser,logout}) {
  const navigate=useNavigate();
  //const [contextValue, setContextValue] = useContext(MyContext);
  // const handleDataFromChild = (data) => {
  //   console.log('update from grandparent'+data);
  //   setIsAuthenticated(data);
    
  // };
console.log(isLoggedIn);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSignInClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const signout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='marriottNavigtion' >
      <Link to="/" >
        <img  className='imageSize' src={require('./marriott_bonvoy.png')} />
      </Link>
      <Link to="/"className='myHeader'>
            Find & Reserve
      </Link>
      <Link to="/" className='myHeader'>
            Special Offers
      </Link>
      <Link to="/" className='myHeader'>
            About Marriott Bonvoy
      </Link>
      <Link to="/" className='myHeader'>
        Partner Central
      </Link>
   { !isLoggedIn && <a className='myHeader' href="#" onClick={handleSignInClick}>
            Signin
      </a>}
     
      { isLoggedIn && <div className='signinHeader'> Welcome, {savedUser[0].payload} </div>}

       { isLoggedIn && <div className='sigout'><FeatherIcon  icon="user" /><a className='signinHeader' href="#" onClick={signout}>
        Signout
      </a></div>}
      <YourComponent open={modalOpen} onClose={handleCloseModal} />
    </nav>
  );
}
const mapStateToProps = (state) => (
{
  
  isLoggedIn: state.counter.isLoggedIn ,
  savedUser:state.counter.savedUser
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  //login: () => dispatch({ type: "LOGIN_SUCCESS" }),
  //saveUser:(data)=>dispatch({ type: "SAVE",payload:data }),
  logout: () => dispatch({ type: "LOGOUT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
//export default TopNavBar;
