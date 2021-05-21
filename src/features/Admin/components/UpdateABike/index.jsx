import React from 'react';
import PropTypes from 'prop-types';
import UpdateForm from '../UpdateForm';

UpdateABike.propTypes = {

};

function UpdateABike({ bike }) {

    const handleSubmit = (values) => {
        console.log('Form submit: ', values);
    }


    return (
        <div>
            <UpdateForm updateBike={bike} onSubmit={handleSubmit} />
        </div>
    );
}

export default UpdateABike;