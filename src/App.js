//import logo from './logo.svg';
import './App.css';
import Test from './components/components.js';
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
    </div>
  );
}

export default App;
