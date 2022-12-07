import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useGetAllProductsQuery } from "../../features/productsApi";
import { addToCart } from "../../features/cartSlice";
import "./home.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
      <p>An error occured</p>) : (
      <>
      <h2 className="text-center">Menu of the day</h2>
      <div className="row">
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
