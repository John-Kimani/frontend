import "./homepage.css";
import TamuFoodIMG from '../../assets/tamufoods.png'
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>

    <div className="hero__section mb-5">
      <div className="container container-fluid">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-8 col-lg-8 pt-5">
            <h1 className="header-home">
              Order your <br />
              Favourite foods online.
            </h1>
            <h4>Fast delivery and easy pickups</h4>
            <p className="header-description">
              Tamu foods and menu offers you a wide variety of food item at
              affordable prices.
            </p>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="hero__section-principles">
              <h3 className="header-home">Fast deliveries</h3>
              <p className="header-body">
                We promise to deliver in prompt time.
              </p>
            </div>

            <div className="hero__section-principles">
              <h3 className="header-home">Variety</h3>
              <p className="header-body">
                Explore our wide range of delicious and healthy food items.
              </p>
            </div>

            <div className="hero__section-principles">
              <h3 className="header-home">Easy pickup</h3>
              <p className="header-body">
                Simple, reliable and convinient to your door step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="container conatiner-fluid pt-5 pb-5">
    <div className="row">
                    <div className="col-md-4">
                        <div className="card steps">
                            <div className="card-body">
                              <h5 className="card-title steps_header">Easy To Order</h5>
                              <h6 className="card-subtitle mb-2 text-muted steps_sub-header">Like Order, Pay, Wait.</h6>
                              <p className="card-text">Wherever you are around the city, reach at the comfort of your device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card mt-2 steps">
                            <div className="card-body">
                              <h5 className="card-title steps_header">Prompt Delivery</h5>
                              <h6 className="card-subtitle mb-2 text-muted steps_sub-header">Pay and relax.</h6>
                              <p className="card-text">Place your orders online and get it delivered for free within the city.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card steps">
                            <div className="card-body">
                              <h5 className="card-title steps_header">Unbeatable prices</h5>
                              <h6 className="card-subtitle mb-2 text-muted steps_sub-header">Quality and price guarantee.</h6>
                              <p className="card-text">Get the best and nutricious meal packs at any time of day.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </section>

    <section className="container container-fluid">
        <div className="row pb-5 pt-5">
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
                <img src={TamuFoodIMG} class="img-fluid img-thumbnail card-img" alt="" />
            </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
            <Card>
                <Card.Body>
                    <Card.Title className="about_us-header">
                        We are TamuFoods
                    </Card.Title>
                    <p className="card-text">
                        We're a Kenya tech company and promising Food Tech startup in East African Region.
                        With technology at the core of our business, we create innovative business to business and business to consumer solutions by connecting customers, vendors and couries,
                        whilst making sure we have a sustainable impact in out community and economy,
                    </p>

                    <Card.Title className="about_us-header">Our Mission</Card.Title>
                    <p className="card-text">
                    We seek to enable trade for individuals who love cooking i.e private chefs, catering students or other professionals who love cooking on spare time and not necessarily restaurants.
                    </p>

                </Card.Body>
            </Card>
        </div>
        </div>
    </section>

    <Footer />

    </>
  );
};

export default HomePage;
