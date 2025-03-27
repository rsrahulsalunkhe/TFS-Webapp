import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderProvider } from '../components/HeaderContext';
import Home from '../pages/Home';
import Temp from '../pages/Temp';
import Account from '../pages/Account';
import Futures from '../pages/Futures';
import CommodityDetail from '../pages/CommodityDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Other from '../pages/other/Other';
import PrivacyPolicy from '../pages/other/PrivacyPolicy';
import TermsAndConditions from '../pages/other/TermsAndConditons';
import FAQ from '../pages/other/FAQ'
import Sentiment from '../pages/Sentiment';
import TimeLine from '../pages/TimeLine';
import Coverage from '../pages/Coverage';

const AppRouter = () => {
  return (
    <HeaderProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main style={{ marginBottom: '66px' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temp" element={<Temp />} />
              <Route path="/account" element={<Account />} />
              <Route path="/futures" element={<Futures />} />
              <Route path="/:commodity" element={<CommodityDetail />} />

              <Route path='/sentiment/:id' element={<Sentiment />} />
              <Route path='/time-line/:id' element={<TimeLine />} />
              <Route path='coverage/:id' element={<Coverage />} />

              <Route path='/other' element={<Other />} />
              <Route path='/terms-&-conditions' element={<TermsAndConditions />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/faq' element={<FAQ />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HeaderProvider>
  );
};

export default AppRouter;