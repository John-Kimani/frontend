import "./footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container container-fluid pt-5 pb-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Tamu Foods</h4>
              <p>P.O Box: 123-000100</p>
              <p>Location: Nairobi, Kenya</p>
              <p>Call us: +(254) 705651500</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="row">
                <div className="col-col-sm-12 col-md-6 col-lg-6">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/menu">
                        Menu
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/coming-soon">
                        Restaurants
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/coming-soon">
                        Management
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link info" href="/coming-soon">
                        Publications
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/coming-soon">
                        Promotion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/coming-soon">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Subscribe to our newsletter"
                  />
                  <Form.Text className="text-muted">Stay updated.</Form.Text>
                </Form.Group>
                <Button
                  variant="outline"
                  type="submit"
                  className="btn subscribe-btn"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <a
                    className="nav-link info"
                    href="https://twitter.com/kimperria"
                  >
                    Twitter
                  </a>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <a
                    className="nav-link info"
                    href="https://kimanijohn.netlify.app/"
                  >
                    Porfolio
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 version">
              <span class="info">
                &#169; Site designed and developed by Kimperria
              </span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 version">
              <span class="info">Version 1.0.0-2022</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
