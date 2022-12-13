import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const redirect = useNavigate();
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
    return (
        <>
            <section className='container'>
                <div className='row'>
                    <form method='post'>
                        <h1 className='text-center'>Login Here..</h1>
                        <div className='mb-3'>
                            Email:<input
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder="Your Email"
                                value={state.email}
                                onChange={formhandler}
                            />
                        </div>
                        <div className='mb-3'>
                            Password:<input
                                type="password"
                                name='password'
                                className="form-control"
                                placeholder="Your Password"
                                value={state.password}
                                onChange={formhandler}
                            />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary' onClick={submitHandler} type='submit'>Login</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}


export default Login