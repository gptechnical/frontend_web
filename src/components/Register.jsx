import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {
    const redirect = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [conPassword, setConPassword] = useState(false);
    const [state, setStateValue] = useState({
        name: "", email: "", mobile: "", address: "", password: "", conpassword: ""
    });
    const handler = (e) => {
        setStateValue({ ...state, [e.target.name]: e.target.value })
    }
    const registerSubmit = async () => {
        const { name, email, mobile, address, password, conpassword } = state;
        await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, mobile, address, password, conpassword }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setStateValue(data)
            })
            .catch((err) => {
                console.log(err)
            })
            alert("registration successful")
        setStateValue({
            name: "", email: "", mobile: "", address: "", password: "", conpassword: ""
        })
        redirect("/login")
    }
    const toggleShowPassword = () =>{
        setShowPassword(!showPassword);
    }
    const toggleConPassword = () => {
        setConPassword(!conPassword);
    }
    return (
        <>
            <div className='container' style={{paddingTop: "15px", paddingBottom: "15px"}}>
                <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form method='post'
                    className='reg_form'>
                    <h1 className='text-center text-white'>Register</h1>
                            <span className='text-white fw-bolder'>Name:</span>
                            <input
                                id='myText'
                                type="text"
                                name='name'
                                className="form-control my-2"
                                placeholder="Your Name"
                                value={state.name}
                                onChange={handler}
                            />
                            <span className='text-white fw-bolder'>Email:</span>                           
                            <input
                                id='myText'
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder="Your Email"
                                value={state.email}
                                onChange={handler}
                            />  
                            <span className='text-white fw-bolder'>Mobile:</span>  
                            <input
                                id='myText'
                                type="number"
                                name='mobile'
                                className="form-control"
                                placeholder="Your Mobile"
                                value={state.mobile}
                                onChange={handler}
                            /> 
                            <span className='text-white fw-bolder'>Address:</span> 
                            <input
                                id='myText'
                                type="text"
                                name='address'
                                className="form-control"
                                placeholder="Your Address"
                                value={state.address}
                                onChange={handler}
                            />
                            <span className='text-white fw-bolder'>Password:</span>
                            <input
                                id='myText'
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="form-control"
                                placeholder="Your Password"
                                value={state.password}
                                onChange={handler}
                            />
                            <span onClick={toggleShowPassword} className='eyeIcon'>
                            {showPassword ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
                            </span>
                            <span className='text-white fw-bolder'>ConPassword:</span>
                            <input
                                id='myText'
                                type={conPassword ? 'text' : 'password'}
                                name='conpassword'
                                className="form-control"
                                placeholder="Your ConPassword"
                                value={state.conpassword}
                                onChange={handler}
                            />
                            <span onClick={toggleConPassword} className='eyeIcon_Con'>
                            {conPassword ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
                            </span>
                            <button className='btn_regis' type='button' onClick={registerSubmit}>Register</button>
                    </form>
                </div>

                </div>
               
            </div>
        </>
    )
}

export default Register