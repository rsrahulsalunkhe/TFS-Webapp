import { BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import { HeaderProvider } from '../components/HeaderContext';
import { fetchData } from './../services/apiService';

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

import CollapsibleHeader from '../components/collapsibleHeader/CollapsibleHeader'
import ReportDetail from '../pages/ReportDetail';
import ProfileSelection from '../pages/signUpLogin/ProfileSelection';
import ProfileDetail from '../pages/signUpLogin/ProfileDetail';
import SelectCommodity from '../pages/signUpLogin/SelectCommodity';

const Layout = () => (
  <div className="flex flex-col min-h-screen" style={{ maxWidth: '430px', margin: '0 auto' }}>
    <Header />
    {/* <CollapsibleHeader /> */}
    <main style={{ marginBottom: '59px' }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const WithoutLayout = () => (
  <div className="flex flex-col min-h-screen" style={{ maxWidth: '430px', margin: '0 auto' }}>
    {/* <Header /> */}
    <CollapsibleHeader />
    <main>
      <Outlet />
    </main>
  </div>
);

const NewWithoutLayout = () => (
  <div className="flex flex-col min-h-screen" style={{ maxWidth: '430px', margin: '0 auto' }}>
    <Header />
    {/* <CollapsibleHeader /> */}
    <main>
      <Outlet />
    </main>
  </div>
);

const AppRouter = () => {
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem('user_id');
      const data = await fetchData(`/userdetails/${userId}`);
      
      if (data.status === 100) {
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_uid');
      }
    };
  
    fetchUserDetails();
  }, []);  

  return (
    <HeaderProvider>
      <Router>
        <Routes>
          {/* Routes WITHOUT Layout */}
          <Route element={<UnAuthGuard />}>
            <Route path="/language-selection" element={<LanguageSelection />} />
            <Route path="/mobile-insertion" element={<MobileInsertion />} />
            <Route path="/otp-verification" element={<OtpVerification />} />

            <Route path="/profile-selection" element={<ProfileSelection />} />
            <Route path="/profile-detail" element={<ProfileDetail />} />
            <Route path="/select-commodity" element={<SelectCommodity />} />
          </Route>
          <Route element={<WithoutLayout />}>
            <Route element={<UnAuthGuard />}>
              <Route path=":cat_id/:commodity" element={<CommodityDetail />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path=":commodity/sentiment" element={<Sentiment />} />
              <Route path=":commodity/time-line" element={<TimeLine />} />
              <Route path=":commodity/coverage" element={<Coverage />} />
              <Route path="/report-detail" element={<ReportDetail />} />
            </Route>
          </Route>

          <Route element={<NewWithoutLayout />}>
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