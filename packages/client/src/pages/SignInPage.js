import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const initialState = {
    email: '',
    password: ''
}

const SignInPage = () => {
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
        console.log(data);
    }

    return ( 
        <Container style={{textAlign: 'center', width: '100vh'}}>
            <h3>Sign In</h3>
            <Form style={{height: '100vh', width: '300px', margin: '0 auto'}}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' value={data.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={data.password} onChange={handleChange} />
                </Form.Group>
                <Button type='submit' variant='primary' onClick={handleSubmit}>Sign In</Button>
            </Form>
        </Container>
    )
}

export default SignInPage;