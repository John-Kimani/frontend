import "./404_page_not_found.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PageNotFound404 = () => {
  return (
    <div className="container container-fluid">
      <div className="row mt-5">
        <div className="col-md-6 col-lg-6">
          <aside>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
              alt="404"
            />
          </aside>
        </div>

        <div className="col-md-6 col-lg-6">
          <main className="pt-4">
            <h1>Sorry!</h1>
            <p>
              Either you aren't cool enough to visit this page or it doesn't
              exist <em>. . . like your social life.</em>
            </p>
            <Link to="/">
              <Button variant="outline" className="back_to_home">Back to Home Page</Button>
            </Link>
          </main>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default PageNotFound404;
