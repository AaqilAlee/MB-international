import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Data} from "../../data/Data";

const index = () => {
  const [enterprice, setEnterprice] = useState(Data);

  return (
    <>
      <section>
        <div className="career_banner position-relative">
          <img
            src="/enter.png"
            alt="career img"
            className="career_banner_img "
          />
        </div>
        <Container>
            {enterprice?.map((curElem, index) => {
              return (
                <Col
                  lg={6}
                  data-aos={curElem.animation || ""}
                  className="enterprice_part shadow my-3 rounded-3"
                  key={index}
                >
                  <div className="d-flex justify-content-center">
                    <div className="py-4 text-center">
                      <img
                        src={curElem.logo || ""}
                        alt=""
                        className="enterprice_logo py-3"
                      />
                      <h2 className="font-24 fw-bold">
                        {curElem.bank_name || ""}
                      </h2>
                      <p className="font-18">{curElem.company_name || ""}</p>
                      <p className="font-18">{curElem.location || ""}</p>
                      <p className="font-18">
                        A/C : {curElem.account_number || ""}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Container>
      </section>
    </>
  );
};

export default index;
