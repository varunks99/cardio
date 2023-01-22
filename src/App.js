import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/Sign';
import { Navigation } from './components/Navigation';
import { Earnings } from './components/Earnings';
import { Home } from './components/Home';
import { Analytics } from './components/Analytics';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState(1)

  return <>
    {(tab == 0) && <Earnings />}
    {(tab == 1) && <Home />}
    {(tab == 2) && <Analytics />}
    <Navigation tab={tab} setTab={setTab} />
  </>
}

export default App;
