import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import './App.css';
import MainMenu from './components/admin/MainMenu';
import NavHeader from './components/admin/NavHeader';
import Footer from './components/Footer';
import FixHeader from './components/headers/FixHeader';
import TopHeader from './components/headers/TopHeader';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';
import AccountManagerFeature from './features/Admin/AccountManager';
import BikeManagerFeature from './features/Admin/BikeManager';
import BikesFeature from './features/User/Bike';
import CheckoutFeature from './features/User/Checkout';
// import { NotiProvider } from './NotiHubContext';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [loading]);
  const history = useHistory();
  const isAdmin = true;

  return (

    <div>
      <Switch>
        <Route path="/admin" render={() => {
          // return JSON.parse(localStorage.getItem('user')).role==='admin' ? <div>
          return isAdmin ? <div>
            {loading ?
              <div>
                <Skeleton variant='rect' height={60}></Skeleton>
                <Box marginTop={1}>
                  <Grid container >
                    <Grid ><Skeleton variant='rect' width={270} height={900}></Skeleton></Grid>
                    <Grid item >
                      <Box marginLeft={3} marginTop={2}>
                        <Skeleton variant='rect' width={1560} height={880}></Skeleton>
                      </Box>
                    </Grid>
                  </Grid>

                </Box>
              </div> :
              <div id="wrapper">
                {/* <NotiProvider> */}
                <NavHeader />
                <MainMenu />
                <Switch>
                  <Route path="/admin/bikes" component={BikeManagerFeature}></Route>
                  <Route path="/admin/accounts" component={AccountManagerFeature}></Route>
                </Switch>
                {/* </NotiProvider> */}
              </div>
            }
          </div> :
            <div>
              {history.replace('/')}
            </div>

        }} />
        <Route path="/" render={() => {
          return (<>
            <TopHeader />
            <FixHeader />
            <Switch>
              <Route path="/bikes" component={BikesFeature} />
              <Route path="/checkout" component={CheckoutFeature} />
              <Route path="/home" component={HomePage} />
              <Route path="/about" component={AboutUs} />
            </Switch>
            <Footer />
          </>);
        }} />
      </Switch>


    </div>
  );
}

export default App;
