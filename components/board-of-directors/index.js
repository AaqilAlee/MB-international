import Image from "next/image";
import Row from "react-bootstrap/Row";
import Directors from "../../public/bod/Banner.png";

import Head from "next/head";
import { makeTitle } from "../../utils/helpers";
import React, { Fragment, useEffect, useState } from "react";
import axios from "../../utils/axios";
import { getStoragePath } from "../../utils/helpers";
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/router";

const BoardOfDirectors = () => {
  const router = useRouter();

  const [info, setInfo] = useState([]);
  const [raj_rong, setRaj_rong] = useState([]);
  const [bod, setBod] = useState([]);
  const [khul_bari, setKhul_bari] = useState([]);
  const [mymdha, setMymdha] = useState([]);
  const [dhadha, setDhadha] = useState([]);
  const [cha_syl, setChat_Syl] = useState([]);
  // const [cha_syl, Chat_Syl] = useState([]);

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

  return (
    <Fragment>
      <Head>
        <title>{makeTitle("Board of Directors")}</title>
      </Head>
      <section>
        <div className="">
          <Image src={Directors} alt="" className="bod-img" />
        </div>
        <div className="container-bod">
          <h1 className="bod-page-title text-capitalize font-40 fw-bold text-center py-5 font-lato">
            Corporate Office Organogram
          </h1>

          {/* Chirman */}
          <div className="d-flex justify-content-center mb-5">
            {info.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-4 col-md-4 mb-4">
                    <div className="text-center">
                      <Link href={`/comment/${curElem.id}`}>
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="" style={{ paddingBottom: "30px" }}>
            <Row className="d-flex justify-content-md-center">
              {bod?.map((curElem, key) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                        <p className="">
                          {parse(curElem?.item_deg_desc || "")}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </Row>
          </div>

          
          {/* marketing part */}
          <div className=" text-center">
            <span className="text-capitalize font-40 fw-bold my-5 marketing_team position-relative">
              Marketing Team
            </span>
          </div>

          <div className="row d-flex justify-content-center ">
            <p className="text-capitalize fw-bold py-4 font-24 text-center">
              Rajshahi and Rangpur Division
            </p>
            {raj_rong?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center ">
            <p className="text-capitalize fw-bold py-4 font-24 text-center">
              Khulna and Barisal Division
            </p>
            {khul_bari?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center ">
            <p className="text-capitalize fw-bold py-4 font-24 text-center">
              Mymensingh and Dhaka Part-3 Division
            </p>
            {mymdha?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center ">
            <p className="text-capitalize fw-bold py-4 font-24 text-center">
              Dhaka Part-1 and Dhaka Part-2 Division
            </p>
            {dhadha?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center">
            <p className="text-capitalize fw-bold py-4 font-24 text-center">
              Chattogram and Sylhet division
            </p>
            {cha_syl?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
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
                      <p className="">{parse(curElem?.item_deg_desc || "")}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BoardOfDirectors;
