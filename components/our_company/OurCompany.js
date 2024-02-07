import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";

const OurCompany = () => {
  return (
    <>
      <section className="about_company">
        <Container>
          <Row>
            <Col lg={5} md={5}>
              <div className=" about_com_img_sec">
                <img src="/about.jpg" alt="" className="img-fluid rounded-3 about_com_img" />
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div className="d-flex align-items-center about_com_sec">
                <div>
                  <h1 className="about_company_title fw-semibold pb-3">Our Company</h1>
                  <p className="about_company_des">
                    The Global Heavens MB (Pvt) Ltd. has started operation as a
                    manufacturing venture known as “MB International" in 2016.
                    At the initial period our main product was Gas Regulator and
                    our main objective was to ensure best quality with immense
                    customer satisfaction. Today the company has its wide ranges
                    of Cast Iron products like: Gas Stove, Gas meter.
                  </p>
                  <div className="mt-4 about_com_btn">
                    <Link
                      href="/page/inception"
                      className="text-capitalize theme_text_color font-20 fw-semibold d-flex align-items-center explore_btn"
                    >
                      explore
                      <RiExternalLinkLine
                        className="ms-2 theme_text_color"
                        size={"20px"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurCompany;