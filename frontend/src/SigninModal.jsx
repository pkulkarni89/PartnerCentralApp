import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import LoginForm from './SignIn';
import FeatherIcon from 'feather-icons-react';

const YourComponent = ({ open, onClose }) => {
    
    const handleDataFromChild = (data) => {
        console.log(data);
        // setDataFromChild(data);
        // updateGrandParent(data);
       
      };
  
    return (
      <div>
       
        <Modal open={open} onClose={onClose} >
  <Box  className='signinContainer' >
 

<p class="model-heading ">
        Sign In to your account
         <FeatherIcon  className="placeIconX" icon="x" onClick={onClose} />
       
      </p>
<div>
    <LoginForm/>
{/* <label>Username</label>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
</div>
<div>
<label>Password</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<button onClick={handleSignIn}>Sign In</button> */}
</div>


  </Box>
</Modal>
      </div>
    );
  };

  export default YourComponent;
