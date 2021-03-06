import React from "react";
import { Navbar, Container, Card, Button, Form, Image } from "react-bootstrap";
import logo from "../images/Nav-logo.png";
import Swal from "sweetalert2";

function NavbarDash() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <a style={{ textDecoration: "none" }} href="privateprivates.ml">
            <Navbar.Brand style={{ textAlign: "center", color: "#f4abba" }}>
              <Image
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Where you at ?
            </Navbar.Brand>
          </a>
        </Container>
      </Navbar>
      <Container>
        <div className="row">
          <div
            className="col d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <Card>
              <Card.Body className="p-5">
                <Form>
                  <Form.Group controlId="formFile" className="mb-3">
                    {/* <Form.Label>
                      <h2>Upload Picture</h2>
                    </Form.Label>

                    <Form.Control
                      type="file"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                      }}
                    /> */}
                    <Form.Label>
                      <h3 style={{ textAlign: "center", color: "#ff4a6f" }}>
                        Instagram Username
                      </h3>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter IG Username" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      <h2
                        style={{
                          textAlign: "center",
                          margin: "10px",
                          color: "#8a8a8a",
                        }}
                      >
                        Or
                      </h2>
                      <h3 style={{ textAlign: "center", color: "#ff4a6f" }}>
                        Instagram Image URL
                      </h3>
                    </Form.Label>
                    <Form.Control type="text" placeholder="IG URL of Image" />
                  </Form.Group>
                  <Button
                    className="w-100 mt-4"
                    type="button"
                    onClick={() => {
                      Swal.fire({
                        title: "Sent URL to backend",
                        showClass: {
                          popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                          popup: "animate__animated animate__fadeOutUp",
                        },
                      });
                    }}
                  >
                    Find Match
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <Card>
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Best Matches :</h2>
                <Image
                  src={logo}
                  width="80"
                  height="80"
                  style={{
                    display: "flex",
                    margin: "auto",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavbarDash;
