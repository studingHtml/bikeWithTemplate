import { Route, Switch, useLocation } from 'react-router';
import './App.css';
import MainMenu from './components/admin/MainMenu';
import NavHeader from './components/admin/NavHeader';
import Footer from './components/Footer';
import FixHeader from './components/headers/FixHeader';
import TopHeader from './components/headers/TopHeader';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';
import AdminFeature from './features/Admin';
import BikesFeature from './features/Bike/index';
import CheckoutFeature from './features/Checkout';
import { Skeleton } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@material-ui/core';








function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [loading]);


  return (

    <div>
      <Route path="/admin" render={() => {
        // return JSON.parse(localStorage.getItem('user')).role==='admin' ? <div>
        return true ? <div>
          {loading ?
            <div>


              <Skeleton variant='h1' height={60}></Skeleton>
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


              {/* /. ROW  */}


            </div> :
            <div id="wrapper">
              <NavHeader />
              <MainMenu />
              <AdminFeature />
            </div>
          }

        </div> :
          <div>
            <TopHeader />
            <FixHeader />
            <Switch>
              <Route path="/bikes" component={BikesFeature} exact />
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
