import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "../../utils/axios";
import Link from "next/link";
import parse from "html-react-parser";

const AboutDetails = ({ tab }) => {
  const [inception, setInception] = useState([]);
  const [mis_vis, setMis_vis] = useState([]);

  const [factories, setFactories] = useState([]);
  const [milestone, setMilestone] = useState([]);
  const [objective, setObjective] = useState([]);
  const [sustain, setSustain] = useState([]);
  const [distribution, setDistribution] = useState([]);

  // fetch inception part
  const fetchInception = () => {
    axios.get(`/content-module/36`).then((res) => {
      setInception(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchInception();
  }, []);

  // fetch factories part
  const fetchFactories = () => {
    axios.get(`/content-module/37`).then((res) => {
      setFactories(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchFactories();
  }, []);

  //  fetch Milestone part
  const fetchMilestone = () => {
    axios.get(`/content-module/38`).then((res) => {
      setMilestone(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMilestone();
  }, []);

  // fetch Objective part
  const fetchObjective = () => {
    axios.get(`/content-module/39`).then((res) => {
      setObjective(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchObjective();
  }, []);

  // fetch Sustainability part
  const fetchSustainability = () => {
    axios.get(`/content-module/40`).then((res) => {
      setSustain(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchSustainability();
  }, []);

  // fetch mission vission part
  const fetchMissionVision = () => {
    axios.get(`/content-module/21`).then((res) => {
      setMis_vis(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMissionVision();
  }, []);

  // fetch Sustainability part
  const fetchDistribution = () => {
    axios.get(`/content-module/41`).then((res) => {
      setDistribution(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchDistribution();
  }, []);

  return (
    <>
      <section>
        <div className="mb-5">
          <img src="/about_us.jpg" alt="" className="w-100 about_banner" />
        </div>
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="side_nav_manu_color py-5 mb-5">
                <Link href="/page/inception" legacyBehavior>
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "inception" ? " active-l" : ""
                    }`}
                  >
                    <a>Inception</a>
                  </div>
                </Link>

                <Link href="/page/mission-vision" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "mission-vision" ? " active-l" : ""
                    }`}
                  >
                    <a>Mission & Vision</a>
                  </div>
                </Link>

                <Link href="/page/factories" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "factories" ? " active-l" : ""
                    }`}
                  >
                    <a>factories</a>
                  </div>
                </Link>
                {/* <Link href="/page/milestones" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active${
                      tab === "milestones" ? " active-l" : ""
                    }`}
                  >
                    <a>milestones</a>
                  </div>
                </Link> */}
                <Link href="/page/objective" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "objective" ? " active-l" : ""
                    }`}
                  >
                    <a>Objective</a>
                  </div>
                </Link>
                {/* <Link
                  href="/page/sustainability-practics"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "sustainability-practics" ? " active-l" : ""
                    }`}
                  >
                    <a>sustainability practics</a>
                  </div>
                </Link> */}

                <Link
                  href="/page/distribution-network"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active py-2 ${
                      tab === "distribution-network" ? " active-l" : ""
                    }`}
                  >
                    <a>Distribution network</a>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={9} md={8} className=" px-3 mb-5">
              {tab && tab == "inception" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    {inception[0]?.item_name || ""}
                  </p>
                  <div className="text-justify">
                    {parse(inception[0]?.item_long_desc || "")}
                  </div>
                </div>
              )}
              {tab && tab == "mission-vision" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    {mis_vis[0]?.item_name}
                  </p>
                  {mis_vis?.map((curElem, index) => {
                    return (
                      
                        <div className="text-justify" key={index}>
                          {parse(curElem?.item_long_desc || "")}
                        </div>
                      
                    );
                  })}
                </div>
              )}
              {tab && tab == "factories" && (
                <div>
                  {factories.map((factory,index ) => {
                    return (
                      <div className="mb-4" key={index}>
                        <p className="text-capitalize display-6 theme_text_color fw-semibold pb-3">
                          {factory?.item_name || ""}
                        </p>
                        <div className="text-justify">
                          {parse(factory?.item_long_desc || "")}
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    <Row>
                      <p className="text-center font-30 fw-bold text-capitalize p-5 theme_text_color">
                        factory images
                      </p>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/1.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/2.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/3.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/4.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/5.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/6.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/7.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="factory_img_div rounded-3 mb-4">
                          <img
                            src="/factorywork/8.jpg"
                            alt=""
                            className="factory_img shadow rounded-3"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p className="text-center font-30 fw-bold text-capitalize p-5 theme_text_color">
                    factory video
                  </p>

                  <div className="d-flex justify-content-center">
                    <video
                      // autoPlay
                      // muted
                      controls
                      className="d-block factory_video"
                    >
                      <source src="/factory/factory.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              )}
              
              {tab && tab == "objective" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-3">
                    {objective[0]?.item_name || ""}
                  </p>
                  <div className="text-justify">
                    {parse(objective[0]?.item_long_desc || "")}
                  </div>
                </div>
              )}
              {/* {tab && tab == "sustainability-practics" && (
                <div>
                   <p className="text-capitalize display-6 theme_text_color fw-semibold pb-4">
                    {sustain[0]?.item_name || ""}
                  </p>
                  <p className="text-justify">
                    {parse(sustain[0]?.item_long_desc || "")}
                  </p>
                </div>
              )} */}
              {tab && tab == "distribution-network" && (
                <div>
                  <p className="text-capitalize display-6 theme_text_color fw-semibold pb-3">
                    {distribution[0]?.item_name || ""}
                  </p>
                  <div className="text-justify">
                    {parse(distribution[0]?.item_long_desc || "")}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export async function getStaticProps({ params }) {
  const tab = params.tab;
  return {
    props: {
      tab,
    },
  };
}

export async function getStaticPaths() {
  const tabs = [
    { tab: "inception" },
    { tab: "mission-vision" },
    { tab: "employee-info" },
    { tab: "factories" },
    { tab: "milestones" },
    { tab: "objective" },
    { tab: "sustainability-practics" },
    { tab: "distribution-network" },
  ];

  const paths = tabs.map((item) => ({
    params: { tab: item.tab },
  }));

  return { paths, fallback: false };
}

export default AboutDetails;
