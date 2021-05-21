import React, { useEffect, useState } from 'react';
import productApi from '../../../../api/productApi';
import MainTable from '../../components/MainTable';


BikeManager.propTypes = {

};

function BikeManager(props) {
  useEffect(()=>{
    fetchDataFormApi();
  },[]);
  const [bikes,setBikes] = useState([]);
  const fetchDataFormApi = async () => {
    const response = await productApi.getAll();
    const bikeFromApi = response.data;
    setBikes(bikeFromApi);
    
  }

  const deleteABike = (id) => {

  }

  const updateABike = (value) => {

  }

  const addABike = (value) => {

  }
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h2>Bike Manager</h2>
            <h5>Welcome Hieu , Love to see you back. </h5>
          </div>
        </div>
        {/* /. ROW  */}
        <MainTable bikes={bikes} deleteABike={deleteABike} />
        

      </div>
    </div>

  );
}

export default BikeManager;