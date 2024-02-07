import { useRef, Fragment, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiChevronDown, BiAlignLeft } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";

function Overlay() {
  const [showItems, setShowItems] = useState(false);

  const overlayRef = useRef();

  const openSearch = () => {
    overlayRef.current.style.width = "100%";
  };

  const closeSearch = () => {
    overlayRef.current.style.width = "0%";
  };

  const handleClickService = () => {
    setShowItems(false);
    // router.push("/");
  };

  const handleMouseEnter = () => {
    setShowItems(true);
    setDrop(drop);
  };
  return (
    <Fragment>
      <div className="main">
        <button onClick={openSearch} className="open-button me-3">
          <FaBars className="font-24 res_icons" size={"25px"} />
        </button>
      </div>

      <div ref={overlayRef} className="overlay">
        <button className="close-button" onClick={closeSearch}>
          &times;
        </button>
        <div className="overlay-content text-uppercase font-24 fw-semibold">
          <ul className="lh-lg text-center font-20">
            <li className="text-center">
              <Link
                href="/"
                className="d-flex justify-content-center align-items-center text-light font-24 my-2"
              >
                <span className="position-relative after_border pb-2 text-capitalize sticky_text_color2">
                  home
                </span>
              </Link>
            </li>
            <li>
              <NavDropdown
                className="p-0 rounded-0 about-btn dropdown_menu-7 "
                title={
                  <div className="d-flex align-items-center ">
                    <span className=" position-relative text-capitalize text-light sticky_text_color2 text-inter py-2 font-24 d-flex  align-items-center position-relative after_border  ">
                      about us
                    </span>
                    <BiChevronDown className="ms-1 text-white sticky_text_color2" />
                  </div>
                }
              >
                <NavDropdown.Item
                  as={Link}
                  href="/page/inception"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  inception
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/page/mission-vision"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  mission & vision
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  href="/page/factories"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  factories
                </NavDropdown.Item>
                {/* <NavDropdown.Item
                    as={Link}
                    href="/page/milestones"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    milestones
                  </NavDropdown.Item> */}
                <NavDropdown.Item
                  as={Link}
                  href="/page/objective"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Objective
                </NavDropdown.Item>
                {/* <NavDropdown.Item
                    as={Link}
                    href="/page/sustainability-practics"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    sustainability practics
                  </NavDropdown.Item> */}
                <NavDropdown.Item
                  as={Link}
                  href="/page/distribution-network"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Distribution network
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown
                className="p-0 rounded-0 about-btn dropdown_menu-7 about_btn_width"
                title={
                  <div className="d-flex justify-content-center align-items-center ">
                    <span className=" position-relative text-capitalize text-light sticky_text_color2 text-inter py-2 font-24 d-flex  align-items-center position-relative after_border">
                      organogram
                    </span>
                    <BiChevronDown className="ms-1 text-white sticky_text_color2" />
                  </div>
                }
              >
                <Link
                  href="/organogram/corporate"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  corporate
                </Link>
                <Link
                  href="/organogram/rajshahi_rangpur"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Rajshahi And Rangpur Division
                </Link>
                <Link
                  href="/organogram/khulna_barisal"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Khulna And Barisal Division
                </Link>

                <Link
                  href="/organogram/mymensingh_dhaka"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Mymensingh And Dhaka Part-3 Division
                </Link>
                <Link
                  href="/organogram/dhaka_dhaka"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Dhaka Part-1 And Dhaka Part-2 Division
                </Link>
                <Link
                  href="/organogram/chattogram_sylhet"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  Chattogram And Sylhet Division
                </Link>
                <Link
                  href="/organogram/cro"
                  className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                >
                  CRO
                </Link>
              </NavDropdown>
            </li>
            <li>
              <Link
                href="/enterprice"
                className="d-flex justify-content-center align-items-center font-24 my-2 text-light"
              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color2">
                  enterprice
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className="d-flex justify-content-center align-items-center font-24 my-2 text-light"
              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color2">
                  Catalogue
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Overlay;
