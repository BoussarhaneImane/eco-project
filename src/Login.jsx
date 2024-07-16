import React, { useState } from 'react';
import  axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import imgsrc from './signupPicture.jpg';
import './registre.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/login', formData);
            setSuccessMessage("You are successfully authenticated");
            setErrorMessage('');
            setFormData({
                email: '',
                password: ''
            });
            console.log(response.data.name);
            localStorage.setItem('userName', response.data.name);
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error.response.data);
            setErrorMessage(error.response.data.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <center style={{marginTop:'40px'}}>
                <Link to='/' className="text-zinc-950 text-center my-8 font-medium text-2xl" style={{textDecoration:'underline solid 3px green'}}>
                    Back to Home Page
                </Link>
            </center>
            {loading && <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                <div className="loader">Loading...</div>
            </div>}
            <div style={{marginTop:'40px'}} className="container flex justify-center items-stretch w-[75%] h-full">
                <div className="text-section flex-1 bg-green-700 rounded-l-lg p-3">
                    <img src={imgsrc} alt="Signup" className="h-full object-cover rounded-l-lg w-full" />
                </div>
                <div className="form-section flex flex-col justify-center items-center bg-gray-100 rounded-r-lg p-4">
                    <h1 className="text-zinc-950 text-center my-8 font-medium text-2xl">Log In with Us</h1>
                    {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                    <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs" />
                        </div>
                        <div className="input-group">
                            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs" />
                        </div>
                        <Link to='/register' className="text-center mb-4 block text-slate-600">
                            Don't have an account yet? <span style={{textDecoration:'underline solid 1px black'}} className="text-green-700 ">Sign Up Here</span>
                        </Link>
                        <button type="submit" className="button w-[65%] p-2 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 text-xs mt-4">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
