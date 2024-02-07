import React, { Fragment, useState } from 'react';
import { verificationNotificationCustomer, verifyEmailCustomer } from "../../../services/AuthServices";
import { makeTitle, tostify } from "../../../utils/helpers";
import { toast } from "react-toastify";
import { Container, Col } from "react-bootstrap";
import Head from "next/head";

const VerificationNotificationPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerificationInput, setShowVerificationInput] = useState(false);
    

    const handleResendVerificationLink = () => {
        setIsLoading(true);

        verificationNotificationCustomer().then((response) => {
            if (response?.data?.message) {
                tostify(toast, 'success', response);
                setIsLoading(false);
                setShowVerificationInput(true);
            }
        });
    };

    const handleVerifyCode = () => {
        if (verificationCode) {
            verifyEmailCustomer(verificationCode).then((response) => {
                if (response?.data?.message) {
                    console.log(response.data);
                    if(response.data.message == 'Your email is verified.'){
                    tostify(toast, 'success', response);
                    setTimeout(() => {
                        location.href = '/my-account';
                    }, 1500);
                }else{
                    tostify(toast, 'error', response);
                }
                    
                    

                
                }
            });
        }
        // tostify(toast, 'success', { data: { message: "Verification successful!" } });

        // Optionally, redirect to another page
        // window.location.href = '/my-account';
    };

    return (
        <Fragment>
            <Head>
                <title>{makeTitle("Verify Email")}</title>
            </Head>
            <section className="login-bg">
                <Container>
                    <div className="py-5 d-flex justify-content-center">
                        <Col data-aos="fade-up" data-aos-duration="500" lg={4}
                             className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
                            <h4 className="font-30 pb-4 font-lato fw-semibold text-capitalize">Verify Email</h4>
                            <p className="mb-4">
                                Please check your email and copy the verification code. If you haven't
                                received
                                the email, please click "Send Verification Code."
                            </p>

                            <button type="button"
                                    className="font-poppins btn btn-warning submit-btn w-100 rounded-0 px-5 py-2 text-capitalize"
                                    onClick={handleResendVerificationLink}
                                    disabled={isLoading || showVerificationInput}>
                                {showVerificationInput ? 'Verification Code Sent' : 'Send Verification Link'}
                            </button>

                            {showVerificationInput && (
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        placeholder="Enter Verification Code"
                                        className="form-control"
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="mt-2 font-poppins btn btn-warning submit-btn w-100 rounded-0 px-5 py-2 text-capitalize"
                                        onClick={handleVerifyCode}
                                    >
                                        Verify Code
                                    </button>
                                </div>
                            )}
                        </Col>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
}

export default VerificationNotificationPage;
