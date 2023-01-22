import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/Sign';
import { Navigation } from './components/Navigation';
import Earnings from './components/Earnings';
import { Home } from './components/Home';
import { useEffect, useState, createContext, useContext } from 'react';
import { Box } from '@mui/material';

export const TokenContext = createContext(localStorage.getItem('cardio-auth'));
function App() {
  const [tab, setTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('cardio-auth'));

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTab(0);
  }

  // useEffect(() => {
  //   handleLogin()
  // }, [])

  return <>
    <TokenContext.Provider value={localStorage.getItem('cardio-auth')}>
      <Box sx={{
        margin: "auto",
        marginTop: 2
      }}>
        {isLoggedIn ? <>
          {(tab === 0) && <Home />}
          {(tab === 1) && <Earnings />} </> : <SignIn handleLogin={handleLogin} setTab={setTab} />}
      </Box>
      {isLoggedIn && <Navigation tab={tab} setTab={setTab} />}
    </TokenContext.Provider>
  </>
}

export default App;