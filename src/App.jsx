import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ShopPage from "./components/Shop/ShopPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Login from "./Login.jsx"; 
import Register from "./Register.jsx"; 
const BannerData = {
  discount: "50%", // Pourcentage de réduction
  title: "Sweet Dreams", // Titre de la promotion
  date: "Valid until January 31st", // Date de validité de la promotion
  title2: "Luxury King Size Bed", // Titre du produit
  title3: "Winter Bedroom Sale", // Titre de la vente
  title4: "Upgrade your bedroom with our luxurious king size bed and enjoy the comfort of a good night's sleep.", // Description du produit ou de la promotion
};

const BannerData2 = {
  discount: "20%", // Pourcentage de réduction
  title: "Cooking Made Easy", // Titre de la promotion
  date: "Valid until January 28th", // Date de validité de la promotion
  title2: "Thermomix TM6", // Titre du produit
  title3: "Winter Kitchen Sale", // Titre de la vente
  title4: "Upgrade your kitchen with the Thermomix TM6 and enjoy effortless cooking with its advanced features.", // Description du produit ou de la promotion
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);



  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Router>
      
        <Routes>
       
          <Route
            path={"/"}
            element={
              <>
                <Navbar handleOrderPopup={handleOrderPopup} />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Category />
                <Category2 />
                <Services />
                <Banner data={BannerData} />
                <Products />
                <Banner2 data={BannerData2} />
                <Partners />
                <Footer />
                <Popup
                  orderPopup={orderPopup}
                  handleOrderPopup={handleOrderPopup}
                />
              </>
            }
          />
          <Route path="/shop"  element={
              <>
               <Navbar handleOrderPopup={handleOrderPopup} />
               <ShopPage/>
              </>}/>
          <Route path="/about"   element={
              <>
               <Navbar handleOrderPopup={handleOrderPopup} />
               <AboutPage/>
              </>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


