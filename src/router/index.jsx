import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Temp from '../pages/Temp';
import Account from '../pages/Account';

const AppRouter = () => (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  );
  
  export default AppRouter;