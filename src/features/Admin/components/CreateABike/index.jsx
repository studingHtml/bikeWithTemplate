import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CreateForm from '../CreateForm';
import { Skeleton } from '@material-ui/lab';
import { Box, Grid } from '@material-ui/core';

CreateABike.propTypes = {

};

function CreateABike(props) {

    const handleSubmit = (values) => {
        console.log('Form submit: ', values);
    }

    return (
        <>
                <div id="page-wrapper">
                    <div id="page-inner">

                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12">
                                {/* Advanced Tables */}

                                <div className="panel panel-default ">
                                    <div className="panel-heading">
                                        Create a Bike
                        </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <CreateForm onSubmit={handleSubmit} />
                                        </div>
                                        {/*End Advanced Tables */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default CreateABike;