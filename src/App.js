import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/Sign';
import { Navigation } from './components/Navigation';
import { Earnings } from './components/Earnings';
import { Home } from './components/Home';
import { Analytics } from './components/Analytics';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function App() {
  const [tab, setTab] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true)
    setTab(1)
  }

  useEffect(() => {
    handleLogin()
  }, [])

  return <>
    <Box sx={{
      maxWidth: 500,
      margin: "auto",
      marginTop: 2
    }}>
      {isLoggedIn ? <>
        {(tab == 0) && <Earnings />}
        {(tab == 1) && <Home />} </> : <>
        {(tab == 3) && <SignIn handleLogin={handleLogin} />}
        {(tab == 4) && <SignUp handleLogin={handleLogin} />}
      </>}
      <Box sx={{ height: 70 }}></Box>
    </Box>
    <Navigation isLoggedIn={isLoggedIn} tab={tab} setTab={setTab} />
  </>
}

export default App;