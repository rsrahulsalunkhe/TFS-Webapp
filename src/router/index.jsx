import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Temp from '../pages/Temp';
import Account from '../pages/Account';
import Futures from '../pages/Futures';
import CommodityDetail from '../pages/CommodityDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Other from '../pages/other/Other';
import PrivacyPolicy from '../pages/other/PrivacyPolicy';

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="" style={{marginBottom: '66px'}}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/temp" element={<Temp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/futures" element={<Futures />} />
            <Route path="/:commodity" element={<CommodityDetail />} />

            <Route path='/other' element={<Other />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;