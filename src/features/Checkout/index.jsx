import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import BikeDetailPage from './pages/BikeDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ShoppingCart from './pages/ShoppingCart';

CheckoutFeature.propTypes = {
    
};

function CheckoutFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout" component={CheckoutPage} exact/>
                <Route path="/checkout/detail" component={BikeDetailPage} exact/>
            </Switch>
        </div>
    );
}

export default CheckoutFeature;