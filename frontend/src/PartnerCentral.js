
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import './index.css';
import PartnerLoginForm from './PartnerSignin';
import PartnerSignInComponent from './PartnerSigninModal'
import './PartnerCentral.css';

function PartnerCentral() {
  const [partners, setPartners] = useState([]);
  const [partnerselected,setPartnerselected] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || '';
  const [modalOpen, setModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [currentPartner, setCurrentPartner] = useState(null);

  const partnerLogos = {
    'Uber': '/images/ubernew.jpg',
    'United Airlines': '/images/united_airlines_logo.png',
    'Emirates': '/images/emiratesNew.jpg',
    'Chase': '/images/chasenew.jpg',
    'Hertz': '/images/hertznew.png',
    'Bilt': '/images/bilt.jpg',
    'BetMGM': '/images/betmgm.png',
    'American Express': '/images/amex.png',
    
  };


  const handleOpenClick = () => {
    setModalOpen(true);
  };

  const handleDataFromChild = (data,updatedList) => {
    console.log('update from grandparent'+data);
    setPartners(updatedList);
    setModalOpen(data.modalValue);
    fetchData();
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/partner-central', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      const updatedPartners = data.map(partner => ({
        ...partner,
        imageUrl: partnerLogos[partner.name] || '/images/no_image.png',
        isLinked: partner.status === 'Linked'
      }));

      const sortedPartners = updatedPartners.sort((a, b) => a.name === 'Chase' ? -1 : b.name === 'Chase' ? 1 : 0);
      setPartners(sortedPartners);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPartners([
        { name: 'Chase', imageUrl: '/images/chase_logo.png', benefits: 'Automatic Silver Elite Status. Receive 15 Elite Night Credits per calendar year. Earn Points: 3X points for every $1 spent at Marriott hotels. 2X points for every $1 spent on all other purchases. Annual Free Night Award: Free Night Award every year after your account anniversary. Complimentary Premium Wi-Fi', AccruedAwards: '', isLinked: false },
        { name: 'Uber', imageUrl: '/images/uber_logo.png', benefits: '6X points for every $1 spent Uber Eats delivered to Marriott hotels, 3X points for every $1 spent on Uber rides, 2X points for every $1 spent on Uber eats', AccruedAwards: '', isLinked: false },
        { name: 'United Airlines', imageUrl: '/images/united_airlines_logo.png', benefits: 'Complimentary United MileagePlus® Premier® Silver Status. Complimentary Marriott Bonvoy Gold Elite Status for United MileagePlus® Premier® Gold, Premier® Platinum, and Premier® 1K®. Points Conversion: 1:1 Transfer of Miles to Marriott Bonvoy Points. Get 10,000 Mile Bonus for Every 60,000 Points You Transfer', AccruedAwards: 'Complementary Silver status, 10,000 pts converted to miles', isLinked: true },
        { name: 'Emirates', imageUrl: '/images/emirates_logo.png', benefits: 'Flights: Earn 3 Marriott Bonvoy points for every USD 1 spent when you fly with Emirates, on top of Skywards Miles. Hotel stays: Earn 1 Skywards Mile for every USD 1 spent on stays at hotels participating in Marriott Bonvoy, on top of Marriott Bonvoy points. Points Conversion: 3 Marriott Bonvoy points = 1 Skywards Mile. Enjoy 5,000 bonus Skywards Miles for every 60,000 Marriott Bonvoy points converted', AccruedAwards: '5,000 points and 3,000 miles', isLinked: true },
        { name: 'Hertz', imageUrl: '/images/hertznew.png', benefits: 'Eligible Marriott Bonvoy members can enjoy Hertz Gold Plus Rewards® elite status. 500 points per rental', AccruedAwards: '', isLinked: false },
        { name: 'Bilt', imageUrl: '/images/bilt.jpg', benefits: 'Transfer your Bilt® Points to Marriott Bonvoy points at a 1:1 ratio — plus, get 5,000 Marriott Bonvoy bonus points for every 20,000 Bilt Points you transfer', AccruedAwards: '', isLinked: false },
        { name: 'BetMGM', imageUrl: '/images/betmgm.png', benefits: 'Transfer your BetMGM Rewards Points to Marriott Bonvoy points at a 1:1 ratio', AccruedAwards: '', isLinked: false },
        { name: 'American Express', imageUrl: '/images/amex.png', benefits: '6X points per $1 spent at participating Marriott Bonvoy hotels. 4X points per $1 at restaurants worldwide and at U.S. supermarkets. 2X points per $1 spent on all other eligible purchases. An Annual Free Night Award each year after your anniversary', AccruedAwards: '', isLinked: false },
      ]);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLinkNow = (partnerName) => {
    
    setModalOpen(true);
    setPartnerselected(partnerName);
   
    //navigate('/PartnerSigin', { state: { partnerName, username } });
   // setShowModal(true);
  };


  return (
    <div>
   <TopNavBar updateGrandParent={true}/>
   <div className='partnerreaminingwidth'> 
   <div className='partner-background' />
   <p className="overlay-text"> PARTNER CENTRAL </p>
   <p className="side-text"> The Grand Central Station of Marriott Bonvoy where members can view and link with Bonvoy partners</p>
   </div>
   <div className="partnercentral-container">
     
      <div className="partnercentral-box">
        {partners.map((partner) => (
          <div key={partner.name} className="partnercentral-partner-box">
            <div className="partnercentral-image-container">
              <img
                src={partner.imageUrl}
                className={`partnercentral-image ${partner.isLinked ? 'linked' : ''}`}
              />
              {!partner.isLinked && (
                <button className="partnercentral-add" onClick={() => handleLinkNow(partner)}>
                  +
                </button>
              )}
              {partner.isLinked && (
                <div className="partnercentral-checkmark">✔</div>
              )}
            </div>
            <div className="partnercentral-details">
              <div className="partnercentral-detail-item">
                <strong>Benefits:</strong> {partner.benefits}
              </div>
              <hr/>
              <div className="partnercentral-detail-item">
                <strong>Accrued Benefits:</strong> {partner.AccruedAwards}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && <PartnerSignInComponent partner={partnerselected} alreadySelectedPartners={partners}
       open={handleOpenClick} onClose={handleCloseModal}  updateGrandParent={handleDataFromChild}/>}
   {/* <div className="partnercentral-container">
      <div className="partnercentral-box">
        <h2>Partner Central</h2>
        <div className="partnercentral-header">
          <label>Partners</label>
          <label>Status</label>
          <label>Benefits</label>
          <label>Summary</label>
        </div>
       {modalOpen && <PartnerSignInComponent partner={partnerselected}
       open={handleOpenClick} onClose={handleCloseModal}  updateGrandParent={handleDataFromChild}/>}
        {partners.length>0 && partners.map((partner) => (
          <div key={partner.name} className="partnercentral-row">
            <input type="text" value={partner.name} readOnly className="partnercentral-input" />
            <button 
              className={`partnercentral-button ${partner.status === 'Linked' ? 'linked' : 'linknow'}`} 
              onClick={() => handleLinkNow(partner.name)  } 
              disabled={partner.status === 'Linked'}
            >
              {partner.status}
            </button>
            <input type="text" value={partner.benefits} readOnly className="partnercentral-input" />
            <input type="text" value={partner.summary} readOnly className="partnercentral-input" />
          </div>
        ))}
      </div> 
    </div>*/}
    </div>
    </div>

    
  );
}

export default PartnerCentral;
