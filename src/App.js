import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyReview from "./pages/Dashboard/MyReview";
import Payment from "./pages/Dashboard/Payment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import About from "./pages/Other/About";
import Blog from "./pages/Other/Blog";
import Contact from "./pages/Other/Contact";
import MyPortfolio from "./pages/Other/MyPortfolio";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import NotFound from "./pages/Shared/NotFound";
import RequireAuth from "./pages/Shared/RequireAuth";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="addReview" element={<MyReview />} />
          <Route path="myProfile" element={<MyProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
