import { Route, Switch } from 'react-router';
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








function App() {

  return (
    <div className="App">
      <TopHeader />
      <FixHeader />

      <Switch>
      <Route path="/bikes" component={BikesFeature} />
      <Route path="/checkout" component={CheckoutFeature} />
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutUs} />
      
      </Switch>
      <Footer />      

    </div>

  );
}

export default App;
