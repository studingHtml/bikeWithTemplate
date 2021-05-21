import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../../../components/form-control/InputFeild';


CreateForm.propTypes = {
    onSubmit: PropTypes.func,
};

function CreateForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name!')
            .test('should has at least two words', 'please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        maker: yup.string().required('Please enter the maker!'),
        price: yup.number().min(0),
        quantity: yup.number().min(0).integer(),
        category: yup.string().required('Please enter your category!'),
    });

    const form = useForm({
        defaultValues: {
            name: '',
            maker: '',
            description: '',
            price: '',
            quantity: '',
            category: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (Values) => {
        // console.log("TODO FORM: ", Values);
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(Values);
        }

        form.reset();
    }

    return (
        <div>
            <div>
                <Avatar>
                    <LockOutlined>

                    </LockOutlined>
                </Avatar>
                <Typography style={{ marginLeft: '180px' }} component="h3" variant="h4" >
                    Create New Product
                </Typography>
            </div>


            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputFeild name='name' label='Name' form={form} />
                <InputFeild name='maker' label='Maker' form={form} />
                <InputFeild name='description' label='Description' form={form} />
                <InputFeild name='price' label='Price' form={form} />
                <InputFeild name='quantity' label='Quantity' form={form} />
                <InputFeild name='category' label='Category' form={form} />

                <button class="btn btn-primary" disableElevation type='submit' >
                    <i class="fa fa-edit"></i> Create New Product
                </button>
            </form>
        </div>
    );
}

export default CreateForm;