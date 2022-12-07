import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useGetAllProductsQuery } from "../../features/productsApi";
import { addToCart } from "../../features/cartSlice";
import "./home.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const Home = () => {
  // const { items, status} = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  const history = useNavigate();

  const handleAddToCart = (product)=> {
    dispatch(addToCart(product));
    history('/cart');
  };

  return (
    <div className="container container-fluid">
      {isLoading ? (<p>Loading...</p>
      ) : error ? (
        <div className="container container-fluid">
            <main className="pt-4">
              <h1>Sorry! Internal Server error.</h1>
              <p>
                Seems our servers are down. Please try again later.
                 <em>. . . if this error persists please contact <a href="https://kimanijohn.netlify.app/" target='_blank' rel="noreferrer">admin</a>.</em>
              </p>
              <Link to="/">
                <Button variant="outline" className="back_to_home">Back to Home Page</Button>
              </Link>
            </main>
        <div className="content"></div>
      </div>) : (
      <>
      <h2 className="section__title">Menu of the day</h2>
      <div className="row mt-3 pt-4">
        {data?.map( product => <div key={product.id} className="col-sm-12 col-md-4 col-lg-4">
            <Card>
                <Card.Img variant='top' src={product.image} alt={product.name}/>
                <Card.Body className="card__body">
                    <Card.Title className="card__body-title">{product.name} <span className="price">KSH: {product.price}</span></Card.Title>
                    <Card.Text>
                       <strong>Description: </strong> {product.desc}
                    </Card.Text>
                    <div className="d-grid">
                    <Button variant="outline" className="add_to_cart-btn" onClick={ () => handleAddToCart(product) }>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
            )}
      </div>
      </>)}
    </div>
  );
};

export default Home;
