import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import { toast } from "react-toastify";
import ContactBanner from "../../public/contact.jpg";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail, MdOutlinePhoneForwarded } from "react-icons/md";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { makeTitle, tostify } from "../../utils/helpers";
import { sendContactForm } from "../../services/CommonServices";
import Head from "next/head";
import axios from "axios";

const Contact = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!isVerified) {
    //     tostify(toast, 'error', {
    //         message: 'reCaptcha submission failed'
    //     });
    //     return false;
    // }

    sendContactForm(formData).then((response) => {
      if (response?.data?.status) {
        tostify(toast, "success", response);
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    });
  };

  const [contact, setContact] = useState();
  const fetchContactApi = () => {
    axios.get(`https://api.mbinternationalbd.com/contacts`).then((res) => {
      setContact(res?.data[0]?.contact_list);
    });
  };
  useEffect(() => {
    fetchContactApi();
  }, []);

  return (
    <>
      <Head>
        <title>{makeTitle("Contact Us")}</title>
      </Head>
      <section>
        <div className="terms-banner-div">
          <img src="/contact.jpg" alt="" className="img-fluid terms-banner" />
        </div>
        

        <Container>
          <div className="contact-height mt-5">
            <Row>
              <Col lg={6} md={6} sm={12} className="p-0">
                <div className="mt-5 ">
                  <div className="row">
                    {contact?.map((contactlist ,index) => {
                      return (
                          <Col lg={6} key={index}>
                            <div className="border rounded-1 shadow p-3 contact_list">
                              <div>
                                <div className="d-flex align-items-center mb-2">
                                  <div>
                                    <TiLocationOutline className="font-18 theme-text" />
                                  </div>
                                  <p className="font-16 font-jost contact-address ms-2">
                                    {contactlist?.contact_address || ""}
                                  </p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <MdOutlineEmail className="font-16 theme-text" />
                                  <p className="font-16 font-jost contact-address ms-2">
                                    {contactlist?.contact_email || ""}
                                  </p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                  <MdOutlinePhoneForwarded className="font-16 theme-text" />
                                  <p className="font-16 font-jost contact-address ms-2">
                                    {contactlist?.contact_phone || ""}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Col>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="form-height">
                  <h4 className="send-message text-center font-24 font-poppins text-capitalize pt-3">
                    Send us a message
                  </h4>
                  <div className="d-flex justify-content-center">
                    <p className="text-center font-14 text-secondary w-80 font-poppins text-capitalize pt-3">
                      Your email address will not be published. <br />
                      Required fields are marked *
                    </p>
                  </div>
                  <div className="px-5">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-2" controlId="">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="rounded-0 contact-form-focus"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-0 contact-form-focus"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="">
                        <Form.Label>Mobile No. *</Form.Label>
                        <Form.Control
                          name="mobile"
                          type="number"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="rounded-0 contact-form-focus"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="rounded-0 contact-form-focus"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="">
                        <Form.Label>Message</Form.Label>
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Comments"
                        >
                          <Form.Control
                            name="message"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                            value={formData.message}
                            onChange={handleChange}
                            className="rounded-0 contact-form-focus"
                          />
                        </FloatingLabel>
                      </Form.Group>

                      {/* <Form.Group className="mb-2" controlId="">
                                        <ReCAPTCHA onVerify={setIsVerified}/>
                                    </Form.Group> */}

                      <Button
                        variant="primary"
                        type="submit"
                        className="contact-form-btn font-16 rounded-0 px-5 py-2 mt-2 mb-4"
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
