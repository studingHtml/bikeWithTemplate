import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductPage from './pages/ProductPage';

BikesFeature.propTypes = {
    
};

function BikesFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                
                <Route path={match.path} component={ProductPage} />
            </Switch>
            
        </div>
    );
}

export default BikesFeature;