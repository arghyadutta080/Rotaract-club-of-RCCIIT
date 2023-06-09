import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



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
        <div className='mt-4'>
            <div className="container mt-4">
                <form onSubmit={handleSubmit((d) => {
                    console.log(d);
                    alert("Event details are collected");
                })}>
                    {/* Header */}
                    <div className='text-center display-3 container-fluid mt-4 pt-4' style={{ fontFamily: "Lora" }}> <em>Register</em></div>

                    <div className='d-flex justify-content-around mt-4'>
                        {/* left-column */}
                        <div style={{ width: "40%" }}>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputName"> Username</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputName" placeholder="John Doe" {...register('username')} />
                                <p>{errors.username?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInpuRollt"> College Roll</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputRoll" placeholder="CSE20XX/XXX" {...register('roll')} />
                                <p>{errors.roll?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputId"> Rotaract ID</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputId" placeholder="name@example.com" {...register('rid')} />
                                <p>{errors.rid?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputEmail"> Email ID</label>
                                <input type="email" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputEmail" placeholder="name@example.com" {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </div>
                        </div>
                        {/* right column */}
                        <div style={{ width: "40%" }}>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputNumber"> Phone Number</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputNumber" placeholder="+91 00000 00000" {...register('phone')} />
                                <p>{errors.phone?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputDob"> D.O.B</label>
                                <input type="date" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputDob" {...register('dob')} />
                                <p>{errors.dob?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputBlood"> Blood Group</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputBlood" placeholder="AB+" {...register('blood')} />
                                <p>{errors.blood?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputDoi"> D.O.I</label>
                                <input type="date" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF" }} id="exampleInputDoi" {...register('doi')} />
                                <p>{errors.doi?.message}</p>
                            </div>
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="mt-4 pt-3">
                        <button className="mt-4 fw-semibold btn btn-lg rounded-pill" style={{ backgroundColor: "#B4637A", color: "white", width: "40%" }} type="submit">Register Now</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp