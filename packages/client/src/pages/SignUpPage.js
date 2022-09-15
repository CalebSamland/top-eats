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
    birthday: '',
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

    const handleSubmit = e => {
        // Make POST request to API to store form data in database
    }

    return (
        <Container>
            <h3 style={{textAlign: 'center'}}>Sign Up</h3>
            <Form style={{display: 'flex', flexDirection: 'column'}}>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={data.firstName} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={data.lastName} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birthday (Optional)</Form.Label>
                    <Form.Control type="text" name="birthday" value={data.birthday} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" name="zip" value={data.zip} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={data.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Email</Form.Label>
                    <Form.Control type="email" name="confirmEmail" value={data.confirmEmail} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" style={{margin: '10px'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={data.password} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} required/>
                </Form.Group>
                {data.password !== data.confirmPassword || data.email !== data.confirmEmail ? <span style={{color: 'red'}}>Email or Password Do Not Match</span> : <span></span>}
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default SignUpPage;