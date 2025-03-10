import { Routes, Route, Navigate  } from 'react-router-dom';
import Home from '../pages/Home';
import Temp from '../pages/Temp';
import Account from '../pages/Account';

const AppRouter = () => (
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  );
  
  export default AppRouter;