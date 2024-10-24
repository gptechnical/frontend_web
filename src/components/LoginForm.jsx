import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setEmailError('Invalid email address.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError || passwordError || !email || !password) {
            alert('Please correct the errors before submitting.');
        } else {
       
            alert('Login successful!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
