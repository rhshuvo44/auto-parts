import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import AddProduct from "./pages/Dashboard/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyReview from "./pages/Dashboard/MyReview";
import Payment from "./pages/Dashboard/Payment";
import UpdateProfile from "./pages/Dashboard/UpdateProfile";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import About from "./pages/Other/About";
import Blog from "./pages/Other/Blog";
import Contact from "./pages/Other/Contact";
import Products from "./pages/Products/Products";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import NotFound from "./pages/Shared/NotFound";
import RequireAdmin from "./pages/Shared/RequireAdmin";
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
        <Route path="/product" element={<Products/>} />
        <Route path="/about" element={<About/>} />
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
          <Route index element={<MyProfile />} />
          <Route path="myOrder" element={<MyOrders />} />
          <Route path="addReview" element={<MyReview />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path="manageAllOrders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
