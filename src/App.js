import logo from './logo.svg';
import './App.css';

function App() {
{/*dynamic way  */}
const products = [
  {name: 'Laptop', price: '70,459'},
  {name: 'Phone', price: '120,899'},
  {name: 'Watch', price: '35,000'},
  {name: 'Tablet', price: '40,000'}
];

  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/*<Product name="Laptop" price="70,459 TK"></Product>
      <Product name="Phone" price="120,899 TK"></Product>
      <Product name="Watch" price="35000 TK"></Product> */}
    </div>
  );
}
{/* Product received korar jonno perameter use korbo seta hocche props */}
function Product(props){
  return(
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
