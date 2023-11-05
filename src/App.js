import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
     {/* <Counter></Counter> */}
     <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  //useEffect (() =>{}, []);
  useEffect (() =>{
    //Data load korar jonno (jsonplaceholder.typicode.com/comment website theke (/users) site link copy kore bosay dibo)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      { /*
        users.map(users => <li>{users.name}</li>)
  */}
  {
    users.map(users => <Users name={users.name} email={users.email}></Users>)
  }

    </div>
  )
}

function Users(props){
  return(
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(33)
  {/*console.log(abc); */}
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

{/*dynamic way  
const products = [
  {name: 'Laptop', price: '70,459'},
  {name: 'Phone', price: '120,899'},
  {name: 'Watch', price: '35,000'},
  {name: 'Tablet', price: '40,000'}
]; */}

 {/*<Product name="Laptop" price="70,459 TK"></Product>
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Phone" price="120,899 TK"></Product>
      <Product name="Watch" price="35000 TK"></Product> */}

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
