import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const index = () => {
  return (
    <>
      <section>
        <div className="career_banner position-relative">
          <img
            src="/career.png"
            alt="career img"
            className="career_banner_img"
          />
        </div>
        <Container>
          <div className="mt-5">
            <div className="mt-3 d-flex justify-content-between align-items-center border-bottom">
              <div className="pb-3 mb-3">
                <p className="text-capitalize pb-2 fw-bold font-18 position-relative job_detail_title ms-4">
                  Business Development Executive
                </p>
                <h1 className="font-30 fw-bolder pb-3">
                  <Link href="#" className="job_title">
                    Business Development Executive
                  </Link>
                </h1>
                <div className="d-flex job_spa_detail">
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      job type : full time
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      vacancies : 05
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize font-18 text-secondary job_spa_text">
                      deadline : January 18, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="link_btn">
                 <Link href="/job-details">
                  <button
                    className="theme_bg_color open_job rounded-pill px-3 py-3"
                  >
                    <FaArrowRight color="#fff" className="link_icon"/>
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center border-bottom">
              <div className="pb-3 mb-3">
                <p className="text-capitalize pb-2 fw-bold font-18 position-relative job_detail_title ms-4">
                  Business Development Executive
                </p>
                <h1 className="font-30 fw-bolder pb-3">
                  <Link href="#" className="job_title">
                    Business Development Executive
                  </Link>
                </h1>
                <div className="d-flex job_spa_detail">
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      job type : full time
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      vacancies : 05
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize font-18 text-secondary job_spa_text">
                      deadline : January 18, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="link_btn">
                 <Link href="/job-details">
                  <button
                    className="theme_bg_color open_job rounded-pill px-3 py-3"
                  >
                    <FaArrowRight color="#fff" className="link_icon"/>
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center border-bottom">
              <div className="pb-3 mb-3">
                <p className="text-capitalize pb-2 fw-bold font-18 position-relative job_detail_title ms-4">
                  Business Development Executive
                </p>
                <h1 className="font-30 fw-bolder pb-3">
                  <Link href="#" className="job_title">
                    Business Development Executive
                  </Link>
                </h1>
                <div className="d-flex job_spa_detail">
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      job type : full time
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize me-5 font-18 text-secondary job_spa_text">
                      vacancies : 05
                    </p>
                  </div>
                  <div>
                    <p className="text-capitalize font-18 text-secondary job_spa_text">
                      deadline : January 18, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="link_btn">
                 <Link href="/job-details">
                  <button
                    className="theme_bg_color open_job rounded-pill px-3 py-3"
                  >
                    <FaArrowRight color="#fff" className="link_icon"/>
                  </button>
                </Link>
              </div>
            </div>
            
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
