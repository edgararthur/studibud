import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './signup.css'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import logoImage from '../images/studybuddy_logo 1.png'
// import axios from 'axios'
// import { AuthProvider } from '../context/AuthContext'

export const Signup = () => {
    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmpasswordRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string | null>(null)

    const handleSignup = async (event) => {
        event.preventDefault();
        const firstName = firstnameRef.current?.value;
        const lastName = lastnameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmpasswordRef.current?.value;

        // validate if password inputs match
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return;
        }

        try {
            user
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <div className="signup__body">
                <div className="logo">
                    <img src={logoImage} alt="" />
                </div>
                <div className="signup__form">
                    <div className="signup__header">
                        <h1>
                            Create an Account
                        </h1>
                        <p>
                            Join the study buddy family - connecting people through knowledge
                        </p>
                    </div>
                    <form action="" className='signup__form'>
                        <div className="username">
                            <div className="first">
                                <h3 className='head'>First Name</h3>
                                <Input className='input' id="first__name" ref={firstnameRef} required pattern='\S*' />
                            </div>
                            <div className="last">
                                <h3 className='head'>Last Name</h3>
                                <Input className='input' id="last__name" ref={lastnameRef} required pattern='\S*' />
                            </div>
                        </div>
                        <div className="email">
                            <h3 className='head'>Email</h3>
                            <Input id="email" type='email' ref={emailRef} required pattern='\S*' />
                        </div>
                        <div className="passw">
                            <div className="password">
                                <h3 className='head'>Password</h3>
                                <Input id="password" type='password' ref={passwordRef} required pattern='\S*' />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <div className="confirm__pasword">
                                <h3 className='head'>Confirm Password</h3>
                                <Input id="confirmpassword" type='password' ref={confirmpasswordRef} required pattern='\S*' />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <Button type='submit' onClick={handleSignup}>Sign Up</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
