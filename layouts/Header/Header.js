import Link from "next/link";
import React, { Fragment, useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { BiChevronDown, BiAlignLeft } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import Logo from "../../public/logo/logo3.png";
import { fetchCategories } from "../../services/CategoryServices";
import { isLoggedIn, logout } from "../../utils/auth";
import { useRouter } from "next/router";
import { CgFacebook } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import CartOverlay from "./CartOverlay";
import Navbar from "react-bootstrap/Navbar";
import Overlay from "./Overlay";
import Search from "./Search";

const HeaderOld = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [storedToken, setStoredToken] = useState();
  const [categories, setCategories] = useState([]);
  const [reIsLoggedIn, setReIsLoggedIn] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isLoggedIn()) {
      setReIsLoggedIn(isLoggedIn());
    }
  }, []);

  useEffect(() => {
    setStoredToken(localStorage?.getItem("token"));

    fetchCategories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCategories(response.data);
      }
    });
  }, []);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById("Top").classList.add("sticky2");
    } else {
      document.getElementById("Top").classList.remove("sticky2");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  // 
  const onScroll3 = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById("Top2").classList.add("sticky3");
    } else {
      document.getElementById("Top2").classList.remove("sticky3");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll3, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll3, { passive: true });
    };
  }, []);


  const [navShow, setNavShow] = useState(false);
  const [drop, setDrop] = useState("dropdown_items");
  const [showItems, setShowItems] = useState(false);
  const [showItems2, setShowItems2] = useState(false);

  const handleMouseEnter = () => {
    setShowItems(true);
    setDrop(drop);
  };

  const handleMouseLeave = () => {
    setShowItems(false);
  };

  const handleClickService = () => {
    setShowItems(false);
    // router.push("/");
  };

  // second
  const handleMouseEnter2 = () => {
    setShowItems2(true);
  };

  const handleMouseLeave2 = () => {
    setShowItems2(false);
  };

  const handleClickService2 = () => {
    setShowItems2(false);
    // router.push("/");
  };

  return (
    <>
      <header>
        {/*Tobpar*/}
        <section className="overbanner">
          <Container className="">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-content-center">
                <Link
                  href="/"
                  className="py-2 footer_link_hover social_icon"
                >
                  <CgFacebook />
                </Link>
                <Link
                  href="/"
                  className="py-2 footer_link_hover social_icon"
                >
                  <VscTwitter />
                </Link>
                <Link
                  href="/"
                  className="py-2 footer_link_hover social_icon"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="/"
                  className="py-2 footer_link_hover social_icon"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div>
                <ul className="font-poppins manu-font-one text-white d-flex justify-content-end align-items-center py-2">
                  {/* <li className="pe-3">
                    <Link href="/b2b" className="text-light">
                      B2B Sales
                    </Link>
                  </li> */}
                  <li className="pe-3">
                    <Link href="/career" className="text-light short_manu">
                      Career
                    </Link>
                  </li>
                  <li className="pe-3">
                    <Link href="/contact" className="text-light short_manu">
                      Contact us
                    </Link>
                  </li>
                  {reIsLoggedIn ? (
                    <Fragment>
                      <li className="pe-3 login-modal">
                        <Link href="/my-account" className="text-light short_manu">
                          My Account
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/auth/logout"
                          className="text-light short_manu"
                          onClick={(e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <li className="pe-3 login-modal">
                        <Link href="/auth/login" className="text-light short_manu">
                          Login
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/auth/register" className="text-light short_manu">
                          Sign Up
                        </Link>
                      </li>
                    </Fragment>
                  )}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/*Logo & manu*/}
        <section id="Top" className="overbanner2">
          <Container className="px-0">
            <div className="d-flex justify-content-between align-items-center main-manu-item">
              <div className="">
                <Link href="/">
                  <img src="/logo/logo3.png" alt="Picture of the author" className="brand-logo"/>
                  {/* <Image
                    src={Logo}
                    alt="Picture of the author"
                    className="brand-logo"
                  /> */}
                </Link>
              </div>
              <Nav className="mx-auto pt-2 font-lato manu-font manu-items ">
                <Nav.Link
                  as={Link}
                  href="/"
                  className="d-flex align-items-center text-light font-16 my-2"
                >
                  <span className="position-relative after_border pb-2 text-capitalize sticky_text_color">
                    home
                  </span>
                </Nav.Link>

                <NavDropdown
                  className="p-0 rounded-0 about-btn dropdown_menu-7 "
                  title={
                    <div className="d-flex align-items-center ">
                      <span className=" position-relative text-capitalize text-light sticky_text_color text-inter py-2 font-16 d-flex  align-items-center position-relative after_border">
                        about us
                      </span>
                      <BiChevronDown className="ms-1 text-white sticky_text_color" />
                    </div>
                  }
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleClickService()}
                  show={showItems}
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

                <NavDropdown
                  className="p-0 rounded-0 about-btn dropdown_menu-7 about_btn_width"
                  title={
                    <div className="d-flex align-items-center ">
                      <span className=" position-relative text-capitalize text-light sticky_text_color text-inter py-2 font-16 d-flex  align-items-center position-relative after_border">
                        organogram
                      </span>
                      <BiChevronDown className="ms-1 text-white sticky_text_color" />
                    </div>
                  }
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleClickService()}
                  show={showItems}
                >
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/corporate"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    corporate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/rajshahi_rangpur"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Rajshahi And Rangpur Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/khulna_barisal"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Khulna And Barisal Division
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/mymensingh_dhaka"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Mymensingh And Dhaka Part-3 Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/dhaka_dhaka"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Dhaka Part-1 And Dhaka Part-2 Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/chattogram_sylhet"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Chattogram And Sylhet Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/cro"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    CRO
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  href="/enterprice"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    enterprice
                  </span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  href="/catalogue"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    Catalogue
                  </span>
                </Nav.Link>
              </Nav>

              {/* <div className="login">
                <div className="d-flex justify-content-between align-items-center">
                  {storedToken && (
                  <Fragment>
                    <DropdownButton
                      id="dropdown-basic-button"
                      className="user-icon border-start"
                      title={
                        <span className="manu-icon border-0 d-flex align-items-center">
                          <FaUserCircle
                            size={"25px"}
                            className="sticky_text_color"
                          />
                          <p className="font-12 ps-2 sticky_text_color">
                            Register or login
                          </p>
                        </span>
                      }
                    >
                      <Dropdown.Item className="logoutBtn">
                        <Link
                          href="/my-account"
                          className="d-flex align-items-center profile-btn text-capitalize"
                        >
                          <CiUser className="font-16 me-1" />
                          <span className="font-16">account</span>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="logoutBtn">
                        <Link
                          href="/"
                          className="d-flex align-items-center profile-btn text-capitalize"
                        >
                          <MdOutlineLogout className="font-16 me-1" />
                          <span
                            className="font-16"
                            onClick={(e) => {
                              e.preventDefault();
                              logout();
                            }}
                          >
                            logout
                          </span>
                        </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  </Fragment>
                   )}  
                </div>
              </div> */}
              <CartOverlay className="cart_overlay_div" />
            </div>
          </Container>
        </section>

        {/* for responsive screen */}
        <section
          id="Top2"
          className="overbanner3"
        >
          <Container className="px-0">
            <div className="d-flex justify-content-between align-items-center main-manu-item">
              <div className="">
                <Link href="/">
                  <img
                    src="/logo/logo3.png"
                    alt="Picture of the author"
                    className="brand-logo"
                  />
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <Search />
                <CartOverlay className="cart_overlay_div" />
                <Overlay />
              </div>
              {/* <Overlay/> */}
            </div>
          </Container>
        </section>
      </header>
    </>
  );
};
export default HeaderOld;
