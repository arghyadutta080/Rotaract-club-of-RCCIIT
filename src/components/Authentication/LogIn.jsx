import React, { useContext } from 'react'
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/Auth/AuthContext';


const schema = yup.object().shape({
    roll: yup.string().required('This is a required field'),
    email: yup.string().required('This is a required field')
}).required();


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const context = useContext(AuthContext);
    const isAuthenticated = context.isAuthenticated;
    const setIsAuthenticated = context.setIsAuthenticated;
    const userRoll = context.userRoll;
    const setUserRoll = context.setUserRoll;
    const user = context.user;
    const setUser = context.setUser;

    const userLogin = (classRoll) => {
        axios.get(`https://aodzylv2p2.execute-api.ap-south-1.amazonaws.com/dev/user-by-roll/${classRoll}`)
            .then((response) => {
                console.log(response.data);
                setUser(response.data[0]);
                setUserRoll(classRoll);
                setIsAuthenticated(true);
            })
            .catch(error => {
                console.error(error);
                setIsAuthenticated(false);
            });
    }

    if (isAuthenticated === true) {
        return <Navigate to="/profile" />
    }

    return (
        <div className='mt-4'>
            <div className="container mt-4 pt-2">
                <form onSubmit={handleSubmit((d) => {
                    console.log(d.roll);
                    const classRoll = d.roll;
                    userLogin(classRoll)
                })}>
                    {/* Header */}
                    <div className='text-center display-3 container-fluid mt-4 pt-4' style={{ fontFamily: "Lora" }}> <em>Login</em></div>
                    <p className='my-4'>Don't have an account ?<Link to="/signup" style={{ color: "#B4637A" }}> Register instead</Link></p>

                    <div className='d-flex justify-content-around mt-4'>
                        {/* left-column */}
                        <div style={{ width: "320px" }}>
                            <div className="mt-4 pt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputEmail"> Email ID</label>
                                <input type="email" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputEmail" placeholder="name@example.com" {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInpuRollt"> College Roll</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputRoll" placeholder="CSE20XX/XXX" {...register('roll')} />
                                <p>{errors.roll?.message}</p>
                            </div>
                            {/* submit button */}
                            <div className="mt-4 pt-2 d-flex flex-column justify-content-center align-items-center">
                                <button className="my-4 fw-semibold btn btn-lg rounded-pill" style={{ backgroundColor: "#B4637A", color: "white", width: "70%" }} type="submit">Login Now</button>
                                <Link to="/" style={{ color: "#B4637A" }}>Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login