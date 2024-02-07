import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="footer_bg">
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6}>
              <div className="logo_side px-3">
                <div>
                  <img
                    src="/logo/logo3.png"
                    alt="footer logo"
                    className="footer_logo"
                  />
                </div>
                <div>
                  <p className="text-capitalize pb-2">Global Heavens MB (Pvt) Ltd</p>
                  <p className="text-capitalize pb-2">
                    1F, Folder Street, 4th floor, Wari, Dhaka-1203
                  </p>
                  <p className="text-capitalize pb-2">Bangladesh</p>
                </div>
              </div>
            </Col>
            {/* <Col lg={3}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    about us
                  </p>
                </div>
                <div>
                  <ul>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Inception</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Milestones</li>
                    </Link>
                    <Link href="/" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Factories</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col> */}
            <Col lg={3} md={3} sm={6}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    businesses
                  </p>
                </div>
                <div>
                  <ul>
                   
                
                    <Link href="/catalogue" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Catalogue</li>
                    </Link>
                    <Link href="/enterprice" className="footer_link_hover">
                      <li className="text-capitalize pb-2">Enterprice</li>
                    </Link>
                    <Link href="/auth/login" className="footer_link_hover">
                      <li className="text-capitalize pb-2">login </li>
                    </Link>
                    <Link href="/contact" className="footer_link_hover">
                      <li className="text-capitalize pb-2">contact </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    Legal terms
                  </p>
                </div>
                <div>
                  <ul>
                    <Link href="/privacy-policy" className="footer_link_hover">
                      <li className="text-capitalize pb-2">privacy & policy</li>
                    </Link>
                    <Link href="/terms-and-conditions" className="footer_link_hover">
                      <li className="text-capitalize pb-2">
                        Terms and Conditions
                      </li>
                    </Link>
                    <Link href="/refund-policy" className="footer_link_hover">
                      <li className="text-capitalize pb-2">refund policy</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="logo_side px-3">
                <div className="colmn_title">
                  <p className="text-white text-capitalize about_title pb-3">
                    payments
                  </p>
                </div>
                <div>
                  <img
                    src="/payment3.png"
                    alt=""
                    className="img-fluid footer_img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* copy right part */}
      <section className="copyright">
        <Container>
          <div className="d-flex justify-content-center py-3">
            <div className="">
              <p className=" font-14">© 2023 <Link href="https://codersmind23.com">CB23</Link> | All rights reserved</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
