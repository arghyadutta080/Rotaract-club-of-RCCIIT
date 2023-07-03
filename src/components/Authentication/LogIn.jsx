import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { AccountContext } from '../Account';


const schema = yup.object().shape({
    roll: yup.string().required('This is a required field'),
    email: yup.string().required('This is a required field')
}).required();


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
    const [error, setError] = useState({
        email: false,
        login: false,
    });

    
    
    // const userLogin = (classRoll) => {
        //     axios.get(`${PROFILE_API}/dev/user-by-roll/${classRoll}`)
        //         .then((response) => {
    //             // console.log(response.data);
    //             const responseData = response.data[0]
    //             console.log(responseData);
    //             setUser(responseData);
    //             (Object.keys(responseData).length === 0) ? setIsAuthenticated(false) : setIsAuthenticated(true);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             toast.error("User doesn't exist");
    //         });
    // }

    const {authenticate, getSession, logout}  = useContext(AccountContext);
    
    const onSubmit = event => {
        console.log(email)
        console.log(register)
		debugger;
		event.preventDefault();
        
        setError({
            ...error,
            login: false
        });

        authenticate(email, password)
            .then((data) => {
            console.log("Logged in!", data);
            getSession().then((data)=> {
                console.log(data)
            })
            setIsAuthenticated(true);
        })
        .catch((err) => {
            setError({
                ...error,
                login: true
            });
            console.error("Failed to login", err);
        });

	};

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        console.log("changed")
        if(name === 'email') {
            setEmail(value);
        }
        else if(name === 'password'){
          setPassword(value);
        }
    };

    // if (isAuthenticated === true) {
    //     return <Navigate to="/profile" />
    // }

    return (
        <div className='mt-4'>
            <div className="container mt-4 pt-2">
                <form  onSubmit={(event) => onSubmit(event, email, password)}>
                    {/* Header */}
                    <div className='text-center display-3 container-fluid mt-4 pt-4' style={{ fontFamily: "Lora" }}> <em>Login</em></div>
                    <p className='my-4'>Don't have an account ?<Link to="/signup" style={{ color: "#B4637A" }}> Register instead</Link></p>

                    <div className='d-flex justify-content-around mt-4'>
                        {/* left-column */}
                        <div style={{ width: "320px" }}>
                            <div className="mt-4 pt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="email"> Email ID</label>
                                <input 
                                    name="email" 
                                    id="email" 
                                    value={email}
                                    onChange={(event) => onChangeHandler(event)} 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} 
                                    placeholder="name@example.com"  />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="mt-4">
                                <label className="form-label fw-semibold fs-5" htmlFor="password"> Password</label>
                                <input 
                                    name='password'
                                    id="password" 
                                    value= {password}
                                    onChange={(event) => onChangeHandler(event)} 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    style={{ backgroundColor: "#D7ECEF", border: "2px solid #B4637A" }} 
                                    placeholder="CSE20XXXXX"  />
                                <p>{errors.roll?.message}</p>
                            </div>
                            {/* submit button */}
                            <div className="mt-4 pt-2 d-flex flex-column justify-content-center align-items-center">
                                <button className="my-4 fw-semibold btn btn-lg rounded-pill" style={{ backgroundColor: "#B4637A", color: "white", width: "70%" }} type="submit">Login Now</button>
                                <Link to="/" style={{ color: "#B4637A" }}>Back to Home</Link>
                            </div>
                            {isAuthenticated}
                            <Toaster position="top-center" reverseOrder={false} />

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login