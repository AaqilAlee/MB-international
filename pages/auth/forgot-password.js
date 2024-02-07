import React, {Fragment, useState} from "react";
import Link from "next/link";
import {makeTitle, tostify} from "../../utils/helpers";
import {toast} from "react-toastify";
import {forgotPasswordCustomer, resetPasswordCustomer} from "../../services/AuthServices";  // Import the new service method
import {Col, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Head from "next/head";
import { useRouter } from 'next/router';

function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [resetToken, setResetToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showResetFields, setShowResetFields] = useState(false);
    const [initiatedEmail, setInitiatedEmail] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});
        setIsLoading(true);

        if (showResetFields) {
            // Handle resetting password with token
            resetPasswordCustomer({
                token: resetToken,
                email: initiatedEmail,
                password: password,
                password_confirmation: confirmPassword,
            }, setErrors).then((response) => {
                if (response?.data?.status) {
                    tostify(toast, 'success', response);
                    // Optionally, redirect to another page
                    router.push('/auth/login');
                }
            }).finally(() => {
                setIsLoading(false);
            });
        } else {
            // Handle initiating forgot password
            forgotPasswordCustomer({
                email: email
            }, setErrors).then((response) => {
                if (response?.data?.status) {
                    setShowResetFields(true);
                    setInitiatedEmail(email);
                    tostify(toast, 'success', response);
                    setEmail('');
                }
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }

    return (
        <Fragment>
            <Head>
                <title>{makeTitle("Forgot Password")}</title>
            </Head>
            <section className="login-bg">
                <Container>
                    <div className="py-5 d-flex justify-content-center">
                        <Col data-aos="fade-up" data-aos-duration="500" lg={4}
                             className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
                            <h4 className="font-30 pb-4 ps-3 font-lato fw-semibold text-capitalize">Forgot Password?</h4>
                            <Form onSubmit={handleSubmit}>
                                {showResetFields ? (
                                    <Fragment>
                                        <Form.Group className="mb-3" controlId="resetToken">
                                            <Form.Label>Reset Token <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name='resetToken' value={resetToken}
                                                          onChange={(e) => setResetToken(e.target.value)}
                                                          placeholder="Enter reset token"
                                                          className="rounded-0 login-form" required={true}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="password" name='password' value={password}
                                                          onChange={(e) => setPassword(e.target.value)}
                                                          placeholder="Enter password"
                                                          className="rounded-0 login-form" required={true}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="confirmPassword">
                                            <Form.Label>Confirm Password <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="password" name='confirmPassword' value={confirmPassword}
                                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                                          placeholder="Confirm password"
                                                          className="rounded-0 login-form" required={true}/>
                                        </Form.Group>
                                        <button type="submit"
                                                className="font-poppins btn btn-warning submit-btn w-100 rounded-0 px-5 py-2 text-capitalize"
                                                disabled={isLoading}>
                                            Reset Password
                                        </button>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" name='email' value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                    placeholder="Enter email address"
                                                    className="rounded-0 login-form" required={true}/>
                                    </Form.Group>
                                        <button type="submit"
                                                className="font-poppins btn btn-primary w-100 submit-btn rounded-0 px-5 py-2 text-capitalize"
                                                disabled={isLoading}>
                                            Send Reset Link
                                        </button>
                                    </Fragment>
                                )}

                                <div className="pt-3 d-flex justify-content-center auth-bottom-link">
                                    <span>Remembered your password?</span>
                                    <Link href="/auth/login">
                                        Login
                                    </Link>
                                </div>
                            </Form>
                        </Col>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
}

export default ForgotPasswordPage;
