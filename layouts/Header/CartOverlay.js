import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMdCart } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { withRedux } from "../../utils/HOC/withRedux";
import {
  REMOVE_CART_ITEM,
  UPDATE_ITEM_QUANTITY,
} from "../../store/slices/CartSlice";
import { tostify } from "../../utils/helpers";
import { toast } from "react-toastify";
import Search from "./Search";
import { useCart } from "../../utils/hooks/useCart";

function CartOverlay() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { totalShippingCharge } = useCart(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveFromCart = (event, key) => {
    event.preventDefault();

    try {
      dispatch(REMOVE_CART_ITEM(key));

      tostify(toast, "success", {
        message: "Removed from Cart",
      });
    } catch (error) {
      tostify(toast, "error", {
        message: error.message,
      });
    }
  };

  const handleUpdateCartQuantity = (event, key) => {
    event.preventDefault();

    try {
      dispatch(
        UPDATE_ITEM_QUANTITY({
          key: key,
          quantity: parseInt(event.target.value),
        })
      );

      tostify(toast, "success", {
        message: "Updated",
      });
    } catch (error) {
      tostify(toast, "error", {
        message: error.message,
      });
    }
  };

  return (
    <Fragment>
      {/* <Search /> */}
      <Button onClick={handleShow} className="off-canvas text-danger">
        <div className="d-flex off_canvas_icon_div">
          <IoMdCart className="off-canvas-icon res_icons font-24" />
          <span
            className="badge text-danger text-white pe-0"
            style={{ marginTop: "-10px", marginLeft: "-10px" }}
          >
            {cart?.items?.length}
          </span>
        </div>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=" theme_bg"
      >
        <Offcanvas.Header closeButton className="clo_btn">
          <Offcanvas.Title className="text-capitalize text-white d-flex align-items-center">
            <BiBasket />
            <p className="ps-3">Total items: ({cart?.items?.length})</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="pb-4 border-bottom canvas-height">
            {cart.items.map((item, key) => (
              <div
                className="d-flex justify-content-between align-items-center border-bottom  item-div py-3 m-0"
                key={key}
              >
                <div className="d-flex justify-content-start">
                  <div className="">
                    {item.type === "product" && (
                      <Link href={`/product/${item.inventory_id}`}>
                        <img
                          src={item.image}
                          alt="image"
                          className="product-item-one"
                        />
                      </Link>
                    )}
                    {item.type === "combo" && (
                      <Link href={`/combo/pack/${item.combo_id}`}>
                        <img
                          src={item.image}
                          alt="image"
                          className="product-item-one"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="">
                    <p className="text-capitalize font-16 font-lato ps-3">
                      {item.type === "product" && (
                        <Link href={`/product/${item.inventory_id}`}>
                          {item.title}
                        </Link>
                      )}
                      {item.type === "combo" && (
                        <Link href={`/combo/pack/${item.combo_id}`}>
                          {item.title}
                        </Link>
                      )}
                    </p>
                    <p className="text-capitalize font-16 font-lato ps-3 d-flex align-items-center">
                      <input
                        className="form-control form-control-sm product_increase form-box-focus"
                        style={{ width: "50px" }}
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(event) =>
                          handleUpdateCartQuantity(event, key)
                        }
                      />
                      &nbsp;&nbsp;x &nbsp;&nbsp;{item.unit_price}
                      &nbsp;&nbsp;= &nbsp;&nbsp;{item.total} Tk.
                    </p>
                  </div>
                </div>
                <div className="">
                  <button onClick={(event) => handleRemoveFromCart(event, key)}>
                    <RxCross1 />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout justify-content-center">
            <div className=" mt-3 position-relative">
              {/* <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                  sub-total : {cart.subTotal} Tk.
                </h1> */}
              {/*<h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                                Shipping Charge: {cart.shippingCharge}
                            </h1>
                            <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                                Discount: {cart.discount || 0}
                            </h1>
                            <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                                Tax : {cart.tax || 0}
                            </h1>*/}
              {/* <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                total : {cart.subTotal + totalShippingCharge || 0} Tk.
              </h1> */}
            </div>
            <div className="mt-2 check-button d-flex justify-content-center">
              <Link
                href="/checkout"
                className="d-flex justify-content-evenly text-uppercase font-16 font-lato checkout-btn rounded-1"
                onClick={() => {
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                <span>checkout</span>
                <span className="border-start ps-5">{cart.subTotal} tk</span>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
}

export default withRedux(CartOverlay);
