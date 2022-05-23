import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Headers from "./Pages/Dashboard/Headers/Headers";
import PostAds from "./Pages/Dashboard/PostAds/PostAds";
import SearchAds from "./Pages/Dashboard/SearchAds/SearchAds";
import Categories from "./Pages/Dashboard/Categories/Categories";
import ManageLocations from "./Pages/Dashboard/ManageLocations/ManageLocations";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SingleAdDetail from "./Pages/SingleAdDetail/SingleAdDetail";
import Ads from "./components/Ads/Ads";
import Footers from "./Pages/Dashboard/Footers/Footers";
import FooterDetails from "./Pages/Dashboard/Footers/FooterDetails";
import Pages from "./Pages/Dashboard/DashboardPages/Pages";
import AddNewPage from "./Pages/Dashboard/DashboardPages/AddNewPage";
import SubFooter from "./Pages/Dashboard/Footers/SubFooter";
import ColOne from "./Pages/Dashboard/Footers/Columns/ColOne";
import UserProfile from "./Pages/Dashboard/UserProfile/UserProfile";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Packages from "./Pages/Dashboard/Packages/Packages";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Users from "./Pages/Dashboard/Users/Users";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Location from "./Pages/Location/Location";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="headers" element={<Headers />} />
        <Route path="new-post-ads" element={<PostAds />} />
        <Route path="search-ads" element={<SearchAds />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="users" element={<Users />} />
        <Route path="pages" element={<Pages />} />
        <Route path="categories" element={<Categories />} />
        <Route path="manage-locations" element={<ManageLocations />} />
        <Route path="payment" element={<Payment />} />
        <Route path="packages" element={<Packages />} />
        <Route path="packages/:packTitle" element={<Packages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="footers" element={<Footers />}/>
         
        <Route path="detail" element={<FooterDetails />}></Route>
        <Route path={`columns/:col`} element={<ColOne />} />
        <Route path="subFooter" element={<SubFooter />} />
        <Route path="addNewPage" element={<AddNewPage />} />
      </Route>

      <Route path="adDetail" element={<SingleAdDetail />} />
      <Route path="location" element={<Location />} />
      <Route path="registration" element={<Registration />} />

      <Route path="ads" element={<Ads />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
