import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const params = useParams();
    const redirect = useNavigate();
    const [state, setStateValue] = useState({
        name: "", email: "", mobile: "", address: "", password: "", conpassword: ""
    });
    useEffect(() => {
        getDetails();
    }, []);
    const handler = (e) => {
        setStateValue({ ...state, [e.target.name]: e.target.value })
    }
    const updateSubmit = async () => {
        const { name, email, mobile, address, password, conpassword } = state;
        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: 'PUT',
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
        redirect('/fetch')
    }
    const getDetails = async () => {
        await fetch(`http://localhost:5000/update/${params.id}`)
            .then(response => response.json())
            .then((json) => setStateValue(json))
            .catch(() => { console.log("Network call error") })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>Update Data</h1>
                    <form method='post'>
                        <div className='col-sm-8 col-md-8 mx-auto'>
                            Name:<input
                                type="text"
                                name='name'
                                className="form-control my-2"
                                placeholder="Your Name"
                                value={state.name}
                                onChange={handler}
                            />
                            Email:<input
                                type="email"
                                name='email'
                                className="form-control"
                                placeholder="Your Name"
                                value={state.email}
                                onChange={handler}
                            />
                            Mobile:<input
                                type="number"
                                name='mobile'
                                className="form-control"
                                placeholder="Your Name"
                                value={state.mobile}
                                onChange={handler}
                            />
                            Address:<input
                                type="text"
                                name='address'
                                className="form-control"
                                placeholder="Your Name"
                                value={state.address}
                                onChange={handler}
                            />
                            Password:<input
                                type="password"
                                name='password'
                                className="form-control"
                                placeholder="Your Name"
                                value={state.password}
                                onChange={handler}
                            />
                            ConPassword:<input
                                type="password"
                                name='conpassword'
                                className="form-control"
                                placeholder="Your Name"
                                value={state.conpassword}
                                onChange={handler}
                            />
                            <button className='btn btn-primary'
                                type='button'
                                onClick={updateSubmit}
                            >Update</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Update