import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import SignUpHeader from '../components/SignUpHeader/SignUpHeader';

const initialState = {
    email: '',
    password: ''
}

const SignInPage = ({setUser}) => {
    const [data, setData] = useState(initialState);

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        // Send POST request to check for existing user in database with matching email/password combination
        // If a match is found, authenticate with token and navigate to homepage
        e.preventDefault();
        setUser(true);
    }

    return ( 
        <Container style={{textAlign: 'center', height: '1000px', width: '100%'}}>
            <SignUpHeader />
            <h3>Sign In</h3>
            <Form style={{height: '100vh', width: '300px', margin: '0 auto'}} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' value={data.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={data.password} onChange={handleChange} required/>
                </Form.Group>
                <Button type='submit' variant='primary' style={{marginTop: '20px'}}>Sign In</Button>
            </Form>
        </Container>
    )
}

export default SignInPage;