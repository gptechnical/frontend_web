import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../components/Login.css";

function Login() {
    const redirect = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const formhandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        const { email, password } = state;
       let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email,password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        result=await result.json();
        if(result.auth)
        {
            localStorage.setItem("email",JSON.stringify(result.user.email))
            localStorage.setItem("token",JSON.stringify(result.auth))
            redirect("/")
        }
        else{
            alert("Plz enter correct details")
        }
    }

    const togglePasswordVisibility = () =>{
        setShowPassword(!showPassword);
    }
    return (
        <>
        <section className='container' style={{paddingTop: "50px", paddingBottom: "20px"}}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='text-center login_img'>
                    <img src="Images/login.png" alt="lagin page" width="80%"/>  
                    </div>
                </div>
                    <div className='col-md-6'>
                    <form method='post' className='login_box'>
                        <h1 className='text-center text-white'>Login</h1>
                        <div className='mb-3'>
                           <span className='text-white fw-semibold'>Email:</span> 
                           <input
                                id='myText'
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder="Enter Your Email"
                                value={state.email}
                                onChange={formhandler}                              
                            />
                        </div>
                        <div className='mb-3'>
                           <span className='text-white fw-semibold text-warning'>Password:</span> 
                           <input
                                id='myText'
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="form-control"
                                placeholder="Enter Your Password"
                                value={state.password}
                                onChange={formhandler}
                               
                            />
                            <span onClick={togglePasswordVisibility} className='eye_icon'>
                            {showPassword ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
                            </span>
                           
                        </div>
                        <div>
                            <button className='btn_login' onClick={submitHandler} 
                            type='submit'>Login</button>
                        </div>

                    </form>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Login