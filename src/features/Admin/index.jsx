import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import BikeManager from './pages/BikeManager';
import AccountManager from './pages/AccountManager';
import CreateABike from './components/CreateABike';
import UpdateABike from './components/UpdateABike';

AdminFeature.propTypes = {
    
};

function AdminFeature(props) {
    return (
        <Switch>
            <Route path="/admin/bikes" component={BikeManager} exact></Route>
            <Route path="/admin/accounts" exact component={AccountManager}></Route>
            <Route path="/admin/bikes/create" component={CreateABike}></Route>
            <Route path="/admin/bikes/update" component={UpdateABike}></Route>
        </Switch>
    );
}

export default AdminFeature;