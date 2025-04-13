import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ContentRestrictions from '../pages/other/ContentRestrictions';
import FAQ from '../pages/other/FAQ';
import Sentiment from '../pages/Sentiment';
import TimeLine from '../pages/TimeLine';
import Coverage from '../pages/Coverage';
import ChangeLanguage from '../pages/account/ChangeLanguage';
import ChangeTheme from '../pages/account/ChangeTheme';

import AuthRedirect from './AuthRedirect';
import AuthGuard from './AuthGuard';
import UnAuthGuard from './UnAuthGuard';
import LanguageSelection from '../pages/signUpLogin/LanguageSelection';
import MobileInsertion from '../pages/signUpLogin/MobileInsertion';
import OtpVerification from '../pages/signUpLogin/OtpVerification';
import AccountDelete from '../pages/other/AccountDelete';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen" style={{maxWidth: '430px', marginLeft: 'auto', marginRight: 'auto'}}>
    <Header />
    <main style={{ marginBottom: '66px' }}>{children}</main>
    <Footer />
  </div>
);

const AppRouter = () => {
  return (
    <HeaderProvider>
      <Router>
        <Routes>

          {/* 👇 Routes WITHOUT layout (no Header/Footer) */}
          <Route path="/language-selection" element={<UnAuthGuard component={<LanguageSelection />} />} />
          <Route path="/mobile-insertion" element={<UnAuthGuard component={<MobileInsertion />} />} />
          <Route path="/otp-verification" element={<UnAuthGuard component={<OtpVerification />} />} />

          {/* 👇 Routes WITH layout */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<AuthRedirect />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/temp" element={<Temp />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/futures" element={<Futures />} />
                  <Route path="/:commodity" element={<CommodityDetail />} />

                  <Route path="/sentiment/:id" element={<Sentiment />} />
                  <Route path="/time-line/:id" element={<TimeLine />} />
                  <Route path="/coverage/:id" element={<Coverage />} />

                  <Route path="/change-language" element={<ChangeLanguage />} />
                  <Route path="/change-theme" element={<ChangeTheme />} />

                  <Route path="/other" element={<Other />} />
                  <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/content-restrictions" element={<ContentRestrictions />} />
                  <Route path="/account-delete" element={<AccountDelete />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </HeaderProvider>
  );
};

export default AppRouter;