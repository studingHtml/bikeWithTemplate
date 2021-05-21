import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import CreateABike from '../CreateABike';
import UpdateABike from '../UpdateABike';


MainTable.propTypes = {
    bikes: PropTypes.array,
    deleteABike: PropTypes.func.isRequired,
    updateABike: PropTypes.func.isRequired,
};

MainTable.defaultProps = {
    bikes: [],
};


function MainTable({ bikes, deleteABike, updateABike }) {
    const [open, setOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(true);
    const [updateBike, setUpdateBike] = useState({});


    const handleCreate = () => {
        setOpen(true);
        setIsUpdate(false);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = (id) => {
        if (deleteABike) {
            deleteABike(id);
        };
    }

    const handleUpdate = (bike) => {
        setUpdateBike(bike);
        setOpen(true);
        setIsUpdate(true);
    }



    return (
        <div className="row">
            <div className="col-md-12">
                {/* Advanced Tables */}

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <button onClick={handleCreate} className="btn icon-btn btn-success" style={{}} >
                            <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                                    Create A New Bike
                        </button>
                        {/* Bikes Managers Tables */}

                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="dataTables_length" id="dataTables-example_length">
                                        <label>
                                            <select name="dataTables-example_length" aria-controls="dataTables-example" class="form-control input-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option><option value="100">100</option>
                                            </select> records per page
                                    </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div id="dataTables-example_filter" class="dataTables_filter">
                                        <label>Search:<input type="search" class="form-control input-sm" aria-controls="dataTables-example" /></label>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>image</th>
                                        <th>name</th>
                                        <th>maker</th>
                                        <th>description</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bikes.map((bike) => (
                                        <tr class="gradeU" key={bike.id}>
                                            <td>{bike.id}</td>
                                            <td><img width="50px" height="50px" src={bike.image} className="img-fluid" alt="This a pic" /></td>
                                            <td>{bike.name}</td>
                                            <td>{bike.maker}</td>
                                            <td>{bike.description}</td>
                                            <td>{bike.price}</td>
                                            <td>{bike.quantity}</td>
                                            <td>{bike.category}</td>
                                            <td><button onClick={() => handleDelete(bike.id)} class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
                                            <td><button onClick={() => handleUpdate(bike)} class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="dataTables_info" id="dataTables-example_info" role="alert" aria-live="polite" aria-relevant="all">Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a href="#">Previous</a></li>
                                            <li class="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">2</a></li>
                                            <li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">3</a></li>
                                            <li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">4</a></li>
                                            <li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">5</a></li>
                                            <li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">6</a></li>
                                            <li class="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a href="#">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Advanced Tables */}
            </div>
            <Dialog disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    {isUpdate ? <UpdateABike bike={updateBike} /> : <CreateABike />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                                </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default MainTable;