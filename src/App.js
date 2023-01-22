import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/Sign';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/" element={<PrivateOutlet />}>
            <Route path="/" element={<Home user={userData || {}} />} />
            <Route path="/statistics" element={<Statistics theme={theme} userRegion={userData.statsRegion} />} />
            <Route path="/calculator" element={<Calculator user={userData || {}} />} />
            <Route path="/news" element={<News theme={theme} />} />
            <Route path="/account" element={<Account colorMode={colorMode} theme={theme} user={userData || {}} />} />
            <Route path="/settings" element={<Settings />} />
          </Route> 
          <Route path="*" element={<PageNotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
