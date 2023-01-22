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
  const [tab, setTab] = useState(1)

  return <>
    <Box sx={ {
      height: "90vh",
      overflowY: "scroll"
    } }>
        { (tab == 0) && <Earnings /> }
        { (tab == 1) && <Home /> }
        { (tab == 2) && <Analytics /> }
    </Box>
    <Navigation tab={tab} setTab={setTab} sx={{
      height: "10vh"
    }} />
  </>
}

export default App;
