//import logo from './logo.svg';
import './App.css';

const Navbar =()=>{
  return <h1>This is navbar</h1>
}
const Sidebar = () =>{
  return <h1>This is Sidebar</h1>
}
const Articallist =() =>{
  return <h1>This is Articals List</h1>
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Articallist />
    </div>
  );
}

export default App;
