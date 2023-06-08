import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Club_Logo from '../../Images/Club_Logo.png';

const schema = yup.object().shape({
    username: yup.string().required('This is a required field'),
    roll: yup.string().required('This is a required field'),
    rid: yup.string().required('This is a required field'),
    email: yup.string().required('This is a required field'),
    phone: yup.string().required('This is a required field'),
    dob: yup.string().required('This is a required field'),
    blood: yup.string().required('This is a required field'),
    doi: yup.string().required('This is a required field'),
}).required();

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <div>
            <div className="modal-body">
                <form onSubmit={handleSubmit((d) => {
                    console.log(d);
                    alert("Event details are collected");
                })}>
                    <img className="mb-4" src={Club_Logo} alt="" width="120" height="80" />
                    <h1 className="h3 mb-3 fw-normal">Sign Up for Rotaract Club of RCCIIT</h1>
                    <div className="form-floating mt-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('username')} />
                        <label htmlFor="floatingInput">Username</label>
                        <p>{errors.event_title?.message}</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp
