import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import PartnerLoginForm from './PartnerSignin';
import FeatherIcon from 'feather-icons-react';

const PartnerSignInComponent = ({partner ,open, onClose ,updateGrandParent,alreadySelectedPartners}) => {
  const [dataFromChild, setDataFromChild] = useState('');
  const handleDataFromChild = (data, updatedList) => {
    console.log(data);
    console.log(updatedList);
    setDataFromChild(data);
    updateGrandParent(data,updatedList);

  };
  
  const partnerLogos = {
    'Uber': '/images/ubernew.jpg',
    'United Airlines': '/images/united_airlines_logo.png',
    'Emirates': '/images/emiratesNew.jpg',
    'Chase': '/images/chasenew.jpg'
  };
   
  console.log(partner);
    return (
      <div>
       
        <Modal open={open} onClose={onClose}>
  <Box  className='partnersigninContainer' >
 
<div> <img
                src={partner.imageUrl}
                className={`signcentral-image ${partner.isLinked ? 'linked' : ''}`}
              />
 <p class="partnermodel-heading  ">
       Enter Credentials
         <FeatherIcon  className="placeIconX" icon="x" onClick={onClose} />
       
      </p>
      </div>
<div>
    <PartnerLoginForm partnerNameget={partner} partnerAlready={alreadySelectedPartners}  onDataFromChild={handleDataFromChild}/>
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

  export default PartnerSignInComponent;
