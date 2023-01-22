import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/Sign';
import { Navigation } from './components/Navigation';
import { Earnings } from './components/Earnings';
import { Home } from './components/Home';
import { Analytics } from './components/Analytics';
import { useState } from 'react';
import { Box } from '@mui/material';

function App() {
  const [tab, setTab] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTab(1)
  }

  return <>
    <Box sx={{
      height: "auto",
    }}>
      {isLoggedIn ? <>
        {(tab == 0) && <Earnings />}
        {(tab == 1) && <Home />}
        {(tab == 2) && <Analytics />} </> : <>
        {(tab == 3) && <SignIn handleLogin={handleLogin} />}
        {(tab == 4) && <SignUp handleLogin={handleLogin} />}
      </>}
    </Box>
    <Navigation isLoggedIn={isLoggedIn} tab={tab} setTab={setTab} />
  </>
}

export default App;
