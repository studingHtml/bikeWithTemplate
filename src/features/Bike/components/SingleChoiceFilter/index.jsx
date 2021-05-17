import React from 'react';
import PropTypes from 'prop-types';

SingleChoiceFilter.propTypes = {
    
};

function SingleChoiceFilter(props) {
    return (
        <div className="filter-brand-left">
                  <div className="title-left">
                    <h3>Price</h3>
                  </div>
                  <div className="brand-box">
                    <ul>
                      <li>
                        <div className="radio radio-danger">
                          <input name="survey" id="Radios1" defaultValue="Yes" type="radio" />
                          <label htmlFor="Radios1">  Greater than 2500 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input name="survey" id="Radios2" defaultValue="No" type="radio" />
                          <label htmlFor="Radios2"> 800 - 1500 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input name="survey" id="Radios3" defaultValue="declater" type="radio" />
                          <label htmlFor="Radios3"> 500 - 800 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input name="survey" id="Radios4" defaultValue="declater" type="radio" />
                          <label htmlFor="Radios4"> 500 - 800 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input name="survey" id="Radios5" defaultValue="declater" type="radio" />
                          <label htmlFor="Radios5"> 0 - 500 </label>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
    );
}

export default SingleChoiceFilter;