import React from 'react';
import PropTypes from 'prop-types';
import CreateForm from '../CreateForm';

CreateABike.propTypes = {

};

function CreateABike(props) {

    const handleSubmit = (values) => {
        console.log('Form submit: ', values);
    }

    return (
        <div>
            <CreateForm onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateABike;