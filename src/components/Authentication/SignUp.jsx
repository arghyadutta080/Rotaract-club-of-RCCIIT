import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';



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

    const [registerData, setRegisterData] = useState(false);

    const registration = (data) => {
        const user = {
            username: data.username,
            roll: data.roll,
            rid: data.rid,
            email: data.email,
            phone: data.phone,
            dob: data.dob,
            blood: data.blood,
            doi: data.doi
        }
        axios.post('https://aodzylv2p2.execute-api.ap-south-1.amazonaws.com/dev/user', user)
            .then((response) => {
                console.log(response.data);
                toast.success("Registration Successful");
                setRegisterData(true);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Registration Failed")
            });
    }

    if (registerData === true) {
        return <Navigate to="/login" />
    }

    return (
        <div className='mt-4'>
            <div className="container mt-4">
                <form onSubmit={handleSubmit((d) => {
                    // console.log(d);
                    registration(d)
                })}>
                    {/* Header */}
                    <div className='text-center display-3 container-fluid mt-4 pt-2' style={{ fontFamily: "Lora" }}> <em>Register</em></div>
                    <p className='my-4'>If you already have an account <Link to="/login" style={{ color: "#B4637A" }}> Login instead</Link></p>

                    <div className='d-flex justify-content-evenly flex-wrap mt-4'>
                        {/* left-column */}
                        <div style={{ width: "320px" }}>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputName"> Username</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputName" placeholder="John Doe" {...register('username')} />
                                <p>{errors.username?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInpuRollt"> College Roll</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputRoll" placeholder="CSE20XXXXX" {...register('roll')} />
                                <p>{errors.roll?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputId"> Rotaract ID</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputId" placeholder="6 digit Rtr. ID" {...register('rid')} />
                                <p>{errors.rid?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputEmail"> Email ID</label>
                                <input type="email" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputEmail" placeholder="name@example.com" {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </div>
                        </div>
                        {/* right column */}
                        <div style={{ width: "320px" }}>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputNumber"> Phone Number</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputNumber" placeholder="+91 00000 00000" {...register('phone')} />
                                <p>{errors.phone?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputDob"> D.O.B</label>
                                <input type="date" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputDob" placeholder='dd/mm/yyyy' {...register('dob')} />
                                <p>{errors.dob?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputBlood"> Blood Group</label>
                                <input type="text" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputBlood" placeholder="AB+" {...register('blood')} />
                                <p>{errors.blood?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="exampleInputDoi"> D.O.I</label>
                                <input type="date" className="form-control rounded-pill" style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} id="exampleInputDoi" placeholder='dd/mm/yyyy' {...register('doi')} />
                                <p>{errors.doi?.message}</p>
                            </div>
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="my-4 pt-3">
                        <button className="my-3 fw-semibold btn btn-lg rounded-pill" style={{ backgroundColor: "#B4637A", color: "white", width: "220px" }} type="submit">Register Now</button>
                    </div>

                    <Toaster position="top-center" reverseOrder={false} />
                    
                </form>
            </div>
        </div>
    )
}

export default SignUp