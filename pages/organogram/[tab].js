import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getStoragePath } from "../../utils/helpers";
import parse from "html-react-parser";

import axios from "../../utils/axios";
import Link from "next/link";

const AboutDetails = ({ tab }) => {
  const [info, setInfo] = useState([]);
  const [raj_rong, setRaj_rong] = useState([]);
  const raj_rongpur = raj_rong.slice(1);

  const [bod, setBod] = useState([]);
  const [khul_bari, setKhul_bari] = useState([]);
  const khulna_barisal = khul_bari.slice(1);
  const [mymdha, setMymdha] = useState([]);
  const mym_barisal = mymdha.slice(1);

  const [dhadha, setDhadha] = useState([]);
  const dha_dha = dhadha.slice(1);

  const [cha_syl, setChat_Syl] = useState([]);
  const chatt_syl = cha_syl.slice(1);
  const [cro, setCro] = useState([]);


  const fetchTeamLead = () => {
    axios.get(`/content-module/18`).then((res) => {
      setInfo(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchTeamLead();
  }, []);

  const fetchBoardofDirectors = () => {
    axios.get(`/content-module/1`).then((res) => {
      setBod(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchBoardofDirectors();
  }, []);

  // Rajshahi and Rangpur Division
  const fetchMemberPerson = () => {
    axios.get(`/content-module/30`).then((res) => {
      setRaj_rong(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMemberPerson();
  }, []);

  // khulna and barisal
  const fetchkhul_bari = () => {
    axios.get(`/content-module/31`).then((res) => {
      setKhul_bari(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchkhul_bari();
  }, []);

  // Mymensingh  and dhaka
  const fetchMymDha = () => {
    axios.get(`/content-module/32`).then((res) => {
      setMymdha(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMymDha();
  }, []);

  // Dhaka Part-1 and Dhaka Part-2 Division
  const fetchDhaDha = () => {
    axios.get(`/content-module/33`).then((res) => {
      setDhadha(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchDhaDha();
  }, []);

  // Chattogram and Sylhet division
  const fetchChat_Syl = () => {
    axios.get(`/content-module/34`).then((res) => {
      setChat_Syl(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchChat_Syl();
  }, []);

  const fetchCRO = () => {
    axios.get(`/content-module/35`).then((res) => {
      setCro(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchCRO();
  }, []);

  return (
    <>
      <section>
        <div className="mb-5">
          <img src="/Banner.png" alt="" className="w-100 about_banner" />
        </div>
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="side_nav_manu_color py-5 mb-5">
                <Link href="/organogram/corporate" legacyBehavior>
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "corporate" ? " active-l" : ""
                    }`}
                  >
                    <a>corporate</a>
                  </div>
                </Link>

                <Link
                  href="/organogram/rajshahi_rangpur"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "rajshahi_rangpur" ? " active-l" : ""
                    }`}
                  >
                    <a>rajshahi and rangpur division</a>
                  </div>
                </Link>

                <Link
                  href="/organogram/khulna_barisal"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "khulna_barisal" ? " active-l" : ""
                    }`}
                  >
                    <a>khulna and barisal division</a>
                  </div>
                </Link>
                <Link
                  href="/organogram/mymensingh_dhaka"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active${
                      tab === "mymensingh_dhaka" ? " active-l" : ""
                    }`}
                  >
                    <a>mymensingh and dhaka</a>
                  </div>
                </Link>
                <Link
                  href="/organogram/dhaka_dhaka"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "dhaka_dhaka" ? " active-l" : ""
                    }`}
                  >
                    <a>dhaka and dhaka</a>
                  </div>
                </Link>
                <Link
                  href="/organogram/chattogram_sylhet"
                  legacyBehavior
                  className=""
                >
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "chattogram_sylhet" ? " active-l" : ""
                    }`}
                  >
                    <a>chattogram and sylhet division</a>
                  </div>
                </Link>
                <Link href="/organogram/cro" legacyBehavior className="">
                  <div
                    className={`text-capitalize about_us_tab_active ${
                      tab === "cro" ? " active-l" : ""
                    }`}
                  >
                    <a>CRO</a>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={9}  md={8} className=" px-3 mb-5">
              {tab && tab == "corporate" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    corporate
                  </p>
                  <div className="d-flex justify-content-center mb-5">
                    {info.map((curElem, index) => {
                      return (
                          <div key={index} className="col-lg-4 col-md-4  col-sm-6 mb-4">
                            <div className="text-center me-md-3">
                              <Link href={`/comment/${curElem.id}`}>
                                <img
                                  src={getStoragePath(curElem.item_image)}
                                  alt=""
                                  className="img-fluid rounded leadership-team"
                                />
                              </Link>
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                      );
                    })}
                  </div>
                  <div className="" style={{ paddingBottom: "30px" }}>
                    <Row className="d-flex justify-content-md-center">
                      {bod?.map((curElem, index) => {
                        return (
                          <>
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                              <div className="text-center">
                                <Link href={`/comment/gm/${curElem.id}`}>
                                  <img
                                    src={getStoragePath(curElem.item_image)}
                                    alt=""
                                    className="rounded leadership-team"
                                  />
                                </Link>
                                <h2 className="font-20 fw-bold pt-2 pb-1">
                                  {curElem.item_name}
                                </h2>
                                <p className="about_titledesign position-relative pt-2">
                                  {curElem?.item_short_desc || ""}
                                </p>
                                <div className="">
                                  {parse(curElem?.item_deg_desc || "")}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              )}
              {tab && tab == "rajshahi_rangpur" && (
                <div>
                  <p className="text-capitalize text-center display-6 theme_text_color fw-semibold pb-4">
                    Rajshahi and Rangpur Division
                  </p>
                  <div className="row d-flex justify-content-center">
                    
                    <div className="col-lg-3 col-md-5 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(raj_rong[0]?.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {raj_rong[0]?.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          {raj_rong[0]?.item_short_desc || ""}
                        </p>
                        <div className="">
                          {parse(raj_rong[0]?.item_deg_desc || "")}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div className="row d-flex justify-content-center">
                    {raj_rongpur?.map((curElem, index) => {
                      return (
                        <>
                          <div key={index} className="col-lg-3 col-md-5 col-sm-6 mb-4">
                            <div className="text-center">
                              <img
                                src={getStoragePath(curElem.item_image)}
                                alt=""
                                className="rounded new-team-member"
                              />
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              {tab && tab == "khulna_barisal" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    Khulna and Barisal Division
                  </p>
                  <div className="row d-flex justify-content-center">
                    
                    <div className="col-lg-3 col-md-5 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(khul_bari[0]?.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {khul_bari[0]?.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          {khul_bari[0]?.item_short_desc || ""}
                        </p>
                        <div className="">
                          {parse(khul_bari[0]?.item_deg_desc || "")}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div className="row d-flex justify-content-center">
                    {khulna_barisal?.map((curElem, index) => {
                      return (
                        <>
                          <div key={index} className="col-lg-3 col-md-5 col-sm-6 mb-4">
                            <div className="text-center">
                              <img
                                src={getStoragePath(curElem.item_image)}
                                alt=""
                                className="rounded new-team-member"
                              />
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              {tab && tab == "mymensingh_dhaka" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    Mymensingh and Dhaka Part-3 Division
                  </p>
                  <div className="row d-flex justify-content-center">
                    
                    <div className="col-lg-3 col-md-5 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(mymdha[0]?.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {mymdha[0]?.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          {mymdha[0]?.item_short_desc || ""}
                        </p>
                        <div className="">
                          {parse(mymdha[0]?.item_deg_desc || "")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    {mym_barisal?.map((curElem, index) => {
                      return (
                        <>
                          <div key={index} className="col-lg-3 col-md-5 col-sm-6 mb-4">
                            <div className="text-center">
                              <img
                                src={getStoragePath(curElem.item_image)}
                                alt=""
                                className="rounded new-team-member"
                              />
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              {tab && tab == "dhaka_dhaka" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    Dhaka Part-1 and Dhaka Part-2 Division
                  </p>
                  <div className="row d-flex justify-content-center">
                   
                    <div className="col-lg-3 col-md-5 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(dhadha[0]?.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {dhadha[0]?.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          {dhadha[0]?.item_short_desc || ""}
                        </p>
                        <div className="">
                          {parse(dhadha[0]?.item_deg_desc || "")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    {dha_dha?.map((curElem, index) => {
                      return (
                        <>
                          <div key={index} className="col-lg-3 col-md-5 col-sm-6 mb-4">
                            <div className="text-center">
                              <img
                                src={getStoragePath(curElem.item_image)}
                                alt=""
                                className="rounded new-team-member"
                              />
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              {tab && tab == "chattogram_sylhet" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    Chattogram and Sylhet division
                  </p>
                  <div className="row d-flex justify-content-center">
                  
                    <div className="col-lg-3 col-md-5 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(cha_syl[0]?.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {cha_syl[0]?.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          {cha_syl[0]?.item_short_desc || ""}
                        </p>
                        <div className="">
                          {parse(cha_syl[0]?.item_deg_desc || "")}
                        </div>
                      </div>
                    </div>
                    {/* </>
                      );
                    })} */}
                  </div>
                  <div className="row d-flex justify-content-center">
                    {chatt_syl?.map((curElem, index) => {
                      return (
                          <div className="col-lg-3 col-md-5 col-sm-6 mb-4" key={index}>
                            <div className="text-center">
                              <img
                                src={getStoragePath(curElem.item_image)}
                                alt=""
                                className="rounded new-team-member"
                              />
                              <h2 className="font-20 fw-bold pt-2 pb-1">
                                {curElem.item_name}
                              </h2>
                              <p className="about_titledesign position-relative pt-2">
                                {curElem?.item_short_desc || ""}
                              </p>
                              <div className="">
                                {parse(curElem?.item_deg_desc || "")}
                              </div>
                            </div>
                          </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {tab && tab == "cro" && (
                <div>
                  <p className="text-capitalize text-center mb-4 display-6 theme_text_color fw-semibold pb-4">
                    CRO
                  </p>
                  <div className="row d-flex justify-content-start">
                    {cro?.map((curElem, index) => {
                      return (
                          <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                            <div className="text-center box_card d-flex justify-content-center align-items-center">
                              <div>
                                <h2 className="font-20 fw-bold pt-2 pb-1">
                                  {curElem?.item_name || ""}
                                </h2>
                                <p className="about_titledesign position-relative pt-2">
                                  {curElem?.item_short_desc || ""}
                                </p>
                              </div>
                            </div>
                          </div>
                      );
                    })}
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
    { tab: "corporate" },
    { tab: "rajshahi_rangpur" },
    { tab: "khulna_barisal" },
    { tab: "mymensingh_dhaka" },
    { tab: "dhaka_dhaka" },
    { tab: "chattogram_sylhet" },
    { tab: "cro" },
  ];

  const paths = tabs.map((item) => ({
    params: { tab: item.tab },
  }));

  return { paths, fallback: false };
}

export default AboutDetails;
