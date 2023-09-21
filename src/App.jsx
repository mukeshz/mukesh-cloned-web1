import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Authhentication/SignIn/SignIn';
import LandingPage from './Dashboard/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
          <Route path="signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
