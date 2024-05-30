import { Button, Container, Nav, Navbar as NavBarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CountAllQnt } from "../utilities/CountAllQnt";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, closeCart, cartItems } = useShoppingCart();
  return (
    <NavBarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartItems.length > 0 && (
          <Button
            variant="outline-primary"
            style={{ position: "relative", height: "3rem", width: "3rem" }}
            onClick={openCart}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4H2V6H4L7.68 15.39L6.25 18C6.09 18.32 6 18.66 6 19C6 20.1 6.9 21 8 21H19V19H8.42C8.28 19 8.17 18.89 8.17 18.75L8.2 18.66L9 17H17.55C18.3 17 18.96 16.57 19.3 15.91L22.88 9.24L21.24 8.4L17.55 14H9.1L7.9 11H20V9H8.48L7.2 6H4V4H7ZM7 18C6.45 18 6 18.45 6 19C6 19.55 6.45 20 7 20C7.55 20 8 19.55 8 19C8 18.45 7.55 18 7 18ZM18 18C17.45 18 17 18.45 17 19C17 19.55 17.45 20 18 20C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18Z"
                fill="currentColor"
              />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white", //text color
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute", //make it above the cart
                bottom: "0", //place it in the right buttom corner
                right: "0",
                transform: "translate(25%, 25%)", //move rightdown from init place
              }}
            >
              {CountAllQnt()}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBS>
  );
}
