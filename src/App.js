import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import ProductPage from './features/Bike/pages/ProductPage';
import BikesFeature from './features/Bike/index'
import HomePage from './components/pages/HomePage';
import CheckoutFeature from './features/Checkout';
import ShoppingCart from './features/Checkout/pages/ShoppingCart';
import TopHeader from './components/headers/TopHeader';
import FixHeader from './components/headers/FixHeader';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';
import BikeManager from './features/Admin/pages/BikeManager';
import NavHeader from './components/admin/NavHeader';
import MainMenu from './components/admin/MainMenu';








function App() {

  return (

    <div>
      <Route path="/admin" render={() => {
        // return JSON.parse(localStorage.getItem('user')).role==='admin' ? <div>
        return true ? <div>
          <div id="wrapper">
            <NavHeader />
            <MainMenu />
            <Switch>
              
            </Switch>
            <BikeManager />
          </div>
        </div> :
          <div>
            <TopHeader />
            <FixHeader />
            <Switch>
              <Route path="/bikes" component={BikesFeature} />
              <Route path="/checkout" component={CheckoutFeature} />
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutUs} />
            </Switch>
            <Footer />
          </div>

      }} />


    </div>




  );
}

export default App;
