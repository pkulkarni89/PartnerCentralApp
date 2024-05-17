import React ,{useState,createContext }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import PartnerCentral from './PartnerCentral';
import MainPage from './MainPage';
import PartnerSignin from './PartnerSignin'
export const MyContext = createContext();
function App() {
  const [contextValue, setContextValue] = useState(false); 
   
  return (
    <MyContext.Provider value={[contextValue, setContextValue]}>
<Router>
<Routes>
<Route path="/" element={<MainPage />}></Route>
<Route path="/SignIn" element={<SignIn />} />
<Route path="/partner-central" element={<PartnerCentral />} />
<Route path="/PartnerSignin" element={<PartnerSignin />} />
</Routes>
</Router>
</MyContext.Provider>
  );
}
 
export default App;