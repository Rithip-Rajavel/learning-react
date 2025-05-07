//import logo from './logo.svg';
import './App.css';
import Test from './components/components.js';

import Login from './components/Login.js';

const Navbar =()=>{
  return <h1>This is navbar</h1>
}
const Sidebar = () =>{
  return <h1>This is Sidebar</h1>
}
const Articallist =() =>{
  return <h1>This is Articals List</h1>
}
const Car =(probs) =>{
  return <h1>This is Car {probs.brand.name}</h1>
}

const Item =({name, isPacked}) =>{
  if(isPacked){
    return <li className='item'>{name}✔</li>
  }
  return <li className='item'>{name}❌</li>
}
const list = [
  {name:"item1", isPacked:true},
  {name:"item2", isPacked:false},
  {name:"item3", isPacked:true},
  {name:"item4", isPacked:false},
]
const List =() =>{
  return (
    <ul>
      {list.map((item) => (
        <Item name={item.name} isPacked={item.isPacked} />
      ))}
    </ul>
  )
}

//Events

function Football(){
  const shoot = (a,b) =>{
    alert(b.type);
  }

  return (
    <button onClick={(e) => shoot("goal",e)}>Take a shot!</button>
  )
}

function Cars(props){
  return (
    <li name = "car">I am a {props.name.brand}</li>
  )
}

function Garage(){
  const car = [
    {id:1, brand:"BMW"},
    {id:2, brand:"Mercedes"},
    {id:3, brand:"Audi"},
    {id:4, brand:"Toyota"},
    {id:5, brand:"Honda"},
    {id:6, brand:"Ford"},
    {id:7, brand:"Chevrolet"},
    {id:8, brand:"Nissan"},
    {id:9, brand:"Hyundai"},
  ];
  return (
    <>
    <h2>Who live in my garage?</h2>
    <ul>
      {car.map((cars)=><Cars key ={cars.id} name={cars} />)}
    </ul>
    </>
  );
}
function App() {
  const carInfo = {name:"BMW" ,model :"X5", year:2023};
  return (
    <div >
      <Navbar />
      <Sidebar />
      <Articallist />
      <Test />
      <Car brand = {carInfo} />
      <List />
      <Football />
      <Garage />
      <Login />
    </div>
  );
}

export default App;
