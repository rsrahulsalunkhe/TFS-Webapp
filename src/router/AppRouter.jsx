import { BrowserRouter as Router, Routes, Route, Outlet, Navigate  } from 'react-router-dom';
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
import ContentPolicy from '../pages/other/ContentPolicy';
import FAQ from '../pages/other/FAQ';
import Sentiment from '../pages/Sentiment';
import TimeLine from '../pages/TimeLine';
import Coverage from '../pages/Coverage';
import ChangeLanguage from '../pages/account/ChangeLanguage';
import ChangeTheme from '../pages/account/ChangeTheme';
import AboutUs from '../pages/account/AboutUs';

import AuthRedirect from './AuthRedirect';
import AuthGuard from './AuthGuard';
import UnAuthGuard from './UnAuthGuard';
import LanguageSelection from '../pages/signUpLogin/LanguageSelection';
import MobileInsertion from '../pages/signUpLogin/MobileInsertion';
import OtpVerification from '../pages/signUpLogin/OtpVerification';
import AccountDelete from '../pages/other/AccountDelete';
import HelpAndSupport from '../pages/account/HelpAndSupport';

const Layout = () => (
  <div className="flex flex-col min-h-screen" style={{ maxWidth: '430px', margin: '0 auto' }}>
    <Header />
    <main style={{ marginBottom: '59px' }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const WithoutLayout = () => (
  <div className="flex flex-col min-h-screen" style={{ maxWidth: '430px', margin: '0 auto' }}>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

const AppRouter = () => {
  return (
    <HeaderProvider>
      <Router>
        <Routes>
          {/* Routes WITHOUT Layout */}
          <Route element={<UnAuthGuard />}>
            <Route path="/language-selection" element={<LanguageSelection />} />
            <Route path="/mobile-insertion" element={<MobileInsertion />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
          </Route>
          <Route element={<WithoutLayout />}>
            <Route element={<UnAuthGuard />}>
              <Route path=":cat_id/:commodity" element={<CommodityDetail />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path=":commodity/sentiment" element={<Sentiment />} />
              <Route path=":commodity/time-line" element={<TimeLine />} />
              <Route path=":commodity/coverage" element={<Coverage />} />
            </Route>

            <Route path="/help-&-support" element={<HelpAndSupport />} />
            <Route path="/change-language" element={<ChangeLanguage />} />
            <Route path="/change-theme" element={<ChangeTheme />} />
            <Route path="/other" element={<Other />} />
            <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/content-policy" element={<ContentPolicy />} />
            <Route path="/account-delete" element={<AccountDelete />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Route>

          {/* Routes WITH Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<AuthRedirect />} />
              <Route element={<UnAuthGuard />}>
                <Route path="/home" element={<Home />} />
              </Route>
              <Route path="/temp" element={<Temp />} />
              <Route path="/account" element={<Account />} />
              <Route path="/futures" element={<Futures />} />
            {/* </Route> */}
          </Route>

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </HeaderProvider>
  );
};

export default AppRouter;