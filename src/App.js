import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Vendor from './pages/vendor/Vendor_admin'
import { Profile } from './pages/Profile';
import OtpVerification from './pages/OtpVerification';
import Search from './pages/Search';
import Admin from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/restaurant/:resId" element={<Restaurant/>}></Route>
        <Route path="/search/:sQuery" element={<Search/>}></Route>
        <Route path="/profile_endpoint" element={<Profile />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/verifyotp" element={<OtpVerification />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
