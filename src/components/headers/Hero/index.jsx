import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    
};

function Hero({title}) {
    return (
        <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;