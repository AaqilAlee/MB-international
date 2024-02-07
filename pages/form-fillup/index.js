import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
// import { MdLocationPin } from "react-icons/md";
// import { AiFillFileText } from "react-icons/ai";
// import { FaRegCalendarAlt, FaUserPlus } from "react-icons/fa";
// import { GiTimeTrap, GiTakeMyMoney } from "react-icons/gi";

const index = () => {
  return (
    <>
      <section>
        <div className="career_banner position-relative">
          <img
            src="/job_details.png"
            alt="career img"
            className="career_banner_img"
          />
        </div>
        <Container>
          <Row  data-aos="zoom-in-up">
            <Col
              lg={8}
              
              className="user_application_form my-5 shadow rounded-3 p-5"
            >
              <div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label font-24 fw-bold"
                  >
                    Job
                  </label>
                  <select
                    className="form-select rounded-1 py-2"
                    aria-label="Default select example"
                  >
                    <option selected>Select job</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <h2 className="font-30 fw-bold pb-3">Personal data</h2>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        first name<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        last name<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        email address<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        phone number<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>

                  <Col lg={12} className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        address<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        year of experience
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        className="form-control rounded-1 py-2"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label text-capitalize">
                        gender<span className="text-danger"> *</span>
                      </label>
                      <div className="d-flex pt-2">
                        <div className="form-check pe-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name=""
                            id="male"
                          />
                          <label
                            className="form-check-label text-capitalize"
                            htmlFor="male"
                          >
                            male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name=""
                            id="female"
                          />
                          <label
                            className="form-check-label text-capitalize"
                            htmlFor="female"
                          >
                            female
                          </label>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label text-capitalize ">
                      your resume<span className="text-danger"> *</span>
                      </label>
                      <input
                        className="form-control rounded-1"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label text-capitalize">
                     cover letter<span className="text-danger"> *</span>
                      </label>
                      <input
                        className="form-control rounded-1"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </Col>
                  <div className="mt-5">
                  <Link href="/form-fillup" className="text-uppercase form_submit_btn apply_btn glow-on-hover">
                    submit
                  </Link>
                </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
