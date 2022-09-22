import React, { useState } from "react";
import Header from '../components/Header/Header';
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import './SignUpPage.css';
import SignUpHeader from "../components/SignUpHeader/SignUpHeader";
import axios from "axios";

const SignUpPage = ({ setUser }) => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        zip: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: "text",
            placeholder: 'First Name',
            label: 'First Name',
            errorMessage: 'First name should be 2-20 characters long',
            required: true,
            pattern: "^[A-Za-z]{2,20}$"
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            label: 'Last Name',
            errorMessage: 'Last name should be 2-20 characters long',
            required: true,
            pattern: '^[A-Za-z]{2,20}$'
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: '',
            label: 'Birthday (Optional)'
        },
        {
            id: 4,
            name: 'zip',
            type: 'number',
            placeholder: 'Zip Code',
            label: 'Zip Code',
            errorMessage: 'Zip code should be a 5 digit number',
            required : true,
            pattern: '^[0-9]{5}$'
        },
        {
            id: 5,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            errorMessage: 'Email should be a valid email address',
            required: true
        },
        {
            id: 6,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password',
            errorMessage: 'Password must have 8-20 characters and contain at least 1 upper case letter, one lower case letter, one number, and one special character',
            required: true,
            pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$'
        },
        {
            id: 7,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            label: 'Confirm Password',
            errorMessage: 'Passwords do not match',
            required: true,
            pattern: data.password
        }
    ]

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3001/api/signup", data);
            setUser(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <SignUpHeader />
            <form onSubmit={handleSubmit}>
                <h1 className="signup-header">Sign Up</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={data[input.name]} onChange={handleChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpPage;