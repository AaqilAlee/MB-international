import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Link from "next/link";
import { getStoragePath } from "../../../utils/helpers";

const index = ({ detail }) => {
  return (
    <>
      <section>
        <div>
          <img src="/comment.png" alt="" className="comment_banner" />
        </div>
        <Container>
          <Row>
            <div className="my-5">
              <div className="pb-5">
                <h1 className="title text-center font-40 fw-bold ">
                  {detail?.item_name || ""}
                </h1>
                <h1 className="title text-center font-24">
                  {detail?.item_short_desc || ""}
                </h1>
              </div>
              <div className="comment_details">
                <div>
                  <img
                    src={getStoragePath(detail?.item_image) || ""}
                    className="img-class"
                    alt=""
                  />
                  <p className="align-item pb-3">{detail?.item_long_desc || ""}</p>
                </div>
                <div className="pt-5">
                  <Link href="/organogram/corporate" className="back_to_team">
                    Back to Team member
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export async function getStaticProps({ params }) {
  const id = params.id;
  const response = await fetch(
    "https://api.mbinternationalbd.com/content-module/1"
  );
  const data = await response.json();
  const items = data?.[0].content_item;

  const item = items.filter((i) => i.id == id);

  return {
    props: {
      detail: item[0],
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.mbinternationalbd.com/content-module/1"
  );
  const data = await response.json();
  const items = data?.[0].content_item;

  const paths = items.map((i) => ({
    params: { id: String(i.id) },
  }));
  // console.log(paths)

  return { paths, fallback: false };
}

export default index;
