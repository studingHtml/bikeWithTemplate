import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import classes from 'classnames'
import { useSelector } from 'react-redux';
import CartInHeader from '../../../features/Checkout/components/CartInHeader';

FixHeader.propTypes = {

};

function FixHeader(props) {
  const match = useRouteMatch();
  const [side,setSide] = useState(false);
  const closeSide = () => {
    setSide(false);
  }
  const openSide = () => {
    setSide(true);
  }

  const counter = useSelector((state)=> state.counter);
  
  return (

    <div>
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="/"><img src="/images/logo.png" className="logo" alt="" /></a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                <li className="dropdown megamenu-fw">
                  <NavLink className="nav-link dropdown-toggle arrow" to="/bikes" data-toggle="dropdown">Product</NavLink>
                  {/* <ul className="dropdown-menu megamenu-content" role="menu">
                      <li>
                        <div className="row">
                          <div className="col-menu col-md-3">
                            <h6 className="title">Top</h6>
                          </div>
                          <div className="col-menu col-md-3">
                            <h6 className="title">Bottom</h6>
                          </div>
                          <div className="col-menu col-md-3">
                            <h6 className="title">Clothing</h6>
                          </div>
                          <div className="col-menu col-md-3">
                            <h6 className="title">Accessories</h6>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                </li>
                <li className="dropdown active">
                  <a to="" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                  <ul className="dropdown-menu">
                    <li><a href="/checkout/cart">Cart</a></li>
                    <li><a href="/checkout">Checkout</a></li>
                    <li><a href="my-account.html">My Account</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="shop-detail.html">Shop Detail</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="service.html">Our Service</a></li>
                <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                {/* <li className="search"><a href="#"><i className="fa fa-search" /></a></li> */}
                <li className="side-menu" style={{ cursor: 'pointer' }} onClick={side===true?closeSide:openSide}>
                  <i className="fa fa-shopping-bag" />
                  <span className="badge">{counter}</span>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
          {/* Start Side Menu */}
          <div className={classes({
            'side': true,
            'on': side
          })}>
            <li className="cart-box" style={{position: 'relative'}}>
            <i className="fas fa-times" style={{marginLeft: '200px'}} onClick={closeSide}></i>
              <CartInHeader />
            </li>
          </div>
          {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Main Top */}
      {/* Start Top Search */}
      <div className="top-search">
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-search" /></span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
          </div>
        </div>
      </div>
      {/* End Top Search */}
      {/* Start All Title Box */}

    </div>
  );
}

export default FixHeader;