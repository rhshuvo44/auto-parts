import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import MyReview from './pages/Dashboard/MyReview';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Blog from './pages/Other/Blog';
import MyPortfolio from './pages/Other/MyPortfolio';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import NotFound from './pages/Shared/NotFound';
import RequireAuth from './pages/Shared/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={
          <RequireAuth>
        <MyPortfolio />
        </RequireAuth>
        } />
        
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="review" element={<MyReview />} />
          <Route path="myProfile" element={
            
          <MyProfile />
          
          } />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
