import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';



const schema = yup.object().shape({  
    roll: yup.string().required('This is a required field'), 
    email: yup.string().required('This is a required field')
}).required();



const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className='mt-4'>
            <div className="container mt-4 pt-2">
                <form onSubmit={handleSubmit((d) => {
                    console.log(d);
                    alert("Event details are collected");
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
                            <div className="mt-4 pt-2">
                                <button className="mt-4 fw-semibold btn btn-lg rounded-pill" style={{ backgroundColor: "#B4637A", color: "white", width: "70%" }} type="submit">Login Now</button>
                            </div>                             
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
