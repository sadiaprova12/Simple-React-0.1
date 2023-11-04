import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product name="Laptop" price="70,459 TK"></Product>
      <Product name="Phone" price="120,899 TK"></Product>
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
