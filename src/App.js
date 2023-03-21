import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const singers = [
  { name: "Arijit", age: 40 },
  { name: "Eminem", age: 36 },
  { name: "Atif", age: 42 },
  { name: "Jubin", age: 50 },
  { name: "Sara", age: 28 },
];

const todoStyle = {
  backgroundColor: 'aqua',
  margin:'10px', 
  padding:'10px', 
  color:'red',
  border:'2px solid red',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend name="Limon" age="20"></Friend>
      {
        singers.map(singer => <Singer name={singer.name} age={singer.age}></Singer>)
      }

      {/* 
      This is the count section
      */}
      <Counter></Counter>


      {/*  */}

      <Posts></Posts>
    </div>
  );
}

function Person() {
  return (
    <div className="person-style">
      <h2>Shakib Al Hasan</h2>
      <p>Job: Cricketer</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="friends-style">
      <h2>Name: {props.name}</h2>
      <p>Age:{props.age}</p>
    </div>
  );
}

function Singer(props) {
  return (
    <div style={{backgroundColor: 'whitesmoke', padding:'20px', margin:'20px', border:'2px solid blue', borderRadius:'10px'}}>
      <h3>Name:{props.name}</h3>
      <p>Age:{props.age}</p>
    </div>
  );
};


//! This is another section

function Counter (){
  const [count, setCount] = useState(20)
  const increaseCount = () => setCount(count +1);
  const decreaseCount = () => setCount(count- 1);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
};




// ! This is the fetch section

function Posts (){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);
  return(
    <div>
      <h5>Posts</h5>
      console.log(data.completed)
      {
        posts.map(post => <DisplayPost body={post.body} id={post.id} title={post.title}></DisplayPost>)
      }
    </div>
  )
};

function DisplayPost (props){
  return(
    <div style={todoStyle}>
      <h1>{props.id}</h1>
      <p>{props.title}</p>
      <p> Details: {props.body}</p>
    </div>
  )
}


export default App;
