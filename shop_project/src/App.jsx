import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home/Home';
import BlogCategory from './Components/Pages/BlogCategory';
import Shopgrid from './Components/Shop/Shopgrid';
import BlogSingle from './Components/Pages/BlogSingle';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import StoreList from './Components/Stores/StoreList';
import StoreGrid from './Components/Stores/StoreGrid';
import StoreSingle from './Components/Stores/StoreSingle';
import Shopcart from './Components/Shop/Shopcart';
import Shopgrid3column from './Components/Shop/Shopgrid3column';
import Shoplist from './Components/Shop/Shoplist';
import Shopwishlist from './Components/Shop/Shopwishlist';
import Shopcheckout from './Components/Shop/Shopcheckout';
import Shopsingle2 from './Components/Shop/Shopsingle2';
import Shopsingle from './Components/Shop/Shopsingle';
import Shopfilter from './Components/Shop/Shopfilter';
import Shopfullwidth from './Components/Shop/Shopfullwidth';
import Error from './Components/Pages/Error';
import Signin from './Components/Account/Signin';
import Signup from './Components/Account/Signup';
import ForgotPassword from './Components/Account/ForgotPassword';
import Setting from './Components/Account/Setting';
import PaymentMethod from './Components/Account/PaymentMethod';
import Order from './Components/Account/Order';
import Address from './Components/Account/Address';
import Notification from './Components/Account/Notification';
import Aboutus from './Components/Pages/Aboutus';
import Layout from '../Layout';
import Index from './Components/Dashboard/Index';
import CustomerEdit from './Components/Dashboard/CustomerEdit';
import Orderlist from './Components/Dashboard/Orderlist';
import Ordersingle from './Components/Dashboard/Ordersingle';
import Products from './Components/Dashboard/Products';
import Reviews from './Components/Dashboard/Reviews';
import Vendorgrid from './Components/Dashboard/Vendorgrid';
import Vendorlist from './Components/Dashboard/Vendorlist';
import Addcategory from './Components/Dashboard/Addcategory';
import Addproduct from './Components/Dashboard/Addproduct';
import Bloggrid from './Components/Dashboard/Bloggrid';
import Bloglist from './Components/Dashboard/Bloglist';
import Blognewpost from './Components/Dashboard/Blognewpost';
import Categories from './Components/Dashboard/Categories';
import Createcustomers from './Components/Dashboard/Createcustomers';
import Customers from './Components/Dashboard/Customers';
import ProfileDashboard from './Components/Dashboard/UserProfile';
import AdminProfile from './admin/AdminProfile';
import AdminLogin from './admin/Adminlogin';
import Layouts from '../Layout1';
import AdminEdit from './admin/AdminEdit';
import UpdatePass from './Components/Account/UpdatePass';
import AdminProducts from './admin/AdminProducts';
import AdminDash from './admin/AdminDash';
import AdminCategories from './admin/AdminCateg';
import AdminOrderlist from './admin/AdminOrdlist';
import AdminOrdersingle from './admin/AdminOrdSingle';
import ResetPage from './Components/Account/ResetPage';
import ProductInfo from './Components/Dashboard/ProductInfo';
import AdmnAddcategory from './admin/AdmnAddCateg';
import AdminUpdateForm from './admin/AdminUpdPass';


function App() {
  
  return (
    <>


    
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Layout> <Home/> </Layout> } />

        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/adminDash" element={<AdminDash/>} />
        <Route path="/editprofile" element={<AdminEdit/>} />
        <Route path="/adminProfile" element={<AdminProfile/>} />
        <Route path="/adminProducts" element={<AdminProducts/>} />
        <Route path="/adminCateg" element={<AdminCategories/>} />
        <Route path="/adminOrdlist" element={<AdminOrderlist/>} />
        <Route path="/adminOrdsingle" element={<AdminOrdersingle/>} />
        <Route path="/AdmnAddCateg" element={<AdmnAddcategory/>} />
        <Route path="/AdminUpdPass" element={<AdminUpdateForm/>} />


          <Route path="/Dashindex" element={<Index/>} />
          <Route path="/Profile" element={<ProfileDashboard/>} />

          
          <Route path="/Addcategory" element={<Addcategory/>} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/ProductInfo" element={<ProductInfo/>} />

          <Route path="/Bloggrid" element={<Bloggrid />} />
          <Route path="/Bloglist" element={<Bloglist />} />
          <Route path="/Blognewpost" element={<Blognewpost />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Createcustomers" element={<Createcustomers />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/CustomerEdit" element={<CustomerEdit />} />
          <Route path="/Orderlist" element={<Orderlist />} />
          <Route path="/Ordersingle" element={<Ordersingle />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Vendorgrid" element={<Vendorgrid />} />
          <Route path="/Vendorlist" element={<Vendorlist />} />


          <Route path="/Blog" element={<Layouts> <Blog /></Layouts> } />
          <Route path="/BlogCategory" element={<Layouts> <BlogCategory /></Layouts> } />
          <Route path="/BlogSingle" element={<Layouts> <BlogSingle /></Layouts> } />
          <Route path="/Aboutus" element={<Layouts> <Aboutus/></Layouts> } />
          <Route path="/Error" element={<Error/>} />
          <Route path="/Contact" element={<Layouts> <Contact /></Layouts> } />

          <Route path="/StoreList" element={<Layouts> <StoreList /></Layouts> } />
          <Route path="/StoreGrid" element={<Layouts> <StoreGrid />  </Layouts>  } />
          <Route path="/StoreSingle" element={<Layouts> <StoreSingle /></Layouts> } />

          <Route path="/ShopgridFil" element={<Layouts> <Shopgrid /></Layouts> } />
          <Route path="/Shopcol" element={<Layouts> <Shopgrid3column /></Layouts> } />
          <Route path="/ShoplistFil" element={<Layouts> <Shoplist /></Layouts> } />
          <Route path="/ShopFil" element={<Layouts> <Shopfilter /></Layouts> } />
          <Route path="/Shopwide" element={<Layouts> <Shopfullwidth /></Layouts> } />
          <Route path="/Shopsingle" element={<Shopsingle />} />
          <Route path="/Shopsingv2" element={<Layouts> <Shopsingle2 /></Layouts> } />
          <Route path="/Shopwish" element={<Layouts> <Shopwishlist /></Layouts> } />
          <Route path="/Shopcart" element={<Layouts> <Shopcart /></Layouts> } />
          <Route path="/Shopcheck" element={<Layouts> <Shopcheckout /></Layouts> } />

          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPass" element={<ForgotPassword />} />
          <Route path="/ResetPass" element={<ResetPage/> } />
          <Route path="/Changepassword" element={<UpdatePass/>} />
          <Route path="/Orders" element={<Layouts> <Order /> </Layouts>} />
          <Route path="/Settings" element={<Layouts> <Setting /> </Layouts>} />
          <Route path="/Address" element={<Layouts> <Address /> </Layouts>} />
          <Route path="/Payment" element={<Layouts> <PaymentMethod /> </Layouts>} />
          <Route path="/Notification" element={<Layouts> <Notification /> </Layouts>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


