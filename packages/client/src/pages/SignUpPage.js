import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    InputGroup,
    Form,
    Button,
} from 'react-bootstrap'
import Header from '../components/Header/Header';

const initialState = {
    firstName: '',
    lastName: '',
    zip: '',
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
}

const SignUpPage = () => {
    const [data, setData] = useState(initialState);

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h3 style={{textAlign: 'center'}}>Sign Up</h3>
            <Form style={{display: 'flex', flexDirection: 'column'}}>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={data.firstName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={data.lastName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" name="zip" value={data.zip} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={data.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={data.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SignUpPage;