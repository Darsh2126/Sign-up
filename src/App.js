import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FanSignPage from './components/FanSignPage/FanSignPage';
import TalentSignPage from './components/TalentSignPage/TalentSignPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FanSignPage />} />
          <Route path="/fanpage" element={<FanSignPage />} />
          <Route path="/talentpage" element={<TalentSignPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
