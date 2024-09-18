"use client"
import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Loginform = () => {
    return (
        <div>
            <Form className="form">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3 inputBox"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" className='inputBox' label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className='login-submin-btn' type='submit'>Submit</Button>
                <div className="links"> <Link href="#">Forgot Password</Link> <Link href="#">Signup</Link>
                </div>
            </Form>
        </div>
    )
}

export default Loginform