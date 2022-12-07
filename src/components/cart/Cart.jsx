import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./cart.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container container-fluid">
      <h2 className="section__title">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="start__shopping">
          <p>Your cart is currently empty</p>
          <div>
          <Link to='/'>
                    <Button variant="outline" className="continue_shopping-btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    </span>
                      Start Shopping
                    </Button>
                  </Link>
          </div>
        </div>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems?.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="row information">
                    <div className="col-sm-6">
                      <img
                        src={cartItem.image}
                        alt={cartItem.name}
                        className="product__image"
                      />
                    </div>
                    <div className="col-sm-6">
                      <p>{cartItem.name}</p>
                      <p className="description">{cartItem.desc}</p>
                      <Button variant="outline" className="remove__cart-item">
                        Remove
                      </Button>
                    </div>
                  </td>
                  <td>{cartItem.price}</td>
                  <td className="row information">
                    <div className="col-sm-4">
                      <Button
                        variant="outline"
                        className="remove__cart-quantity"
                      >
                        -
                      </Button>
                    </div>
                    <div className="col-sm-4">{cartItem.cartQuantity}</div>
                    <div className="col-sm-4">
                      <Button variant="outline" className="add__cart-quantity">
                        +
                      </Button>
                    </div>
                  </td>
                  <td>
                    <strong>{cartItem.price * cartItem.cartQuantity}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="row">
            <div className="col-sm-8">
              <Button variant="outline" className="add__cart-quantity">
                Clear Cart
              </Button>
            </div>
            <div className="col-sm-4">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-sm-12 col-lg-6">SUBTOTAL</div>
                    <div className="col-sm-12 col-lg-6">
                      <strong>Ksh: {cart.cartTotalAmount}</strong>
                    </div>
                  </div>
                  <div><small>V.A.T inclusive</small></div>
                  <Button variant="outline" className="checkout-btn">
                    Check out
                  </Button>
                </Card.Body>
                <Card.Footer>
                <Link to='/'>
                    <Button variant="outline" className="continue_shopping-btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    </span>
                      Continue Shopping
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
