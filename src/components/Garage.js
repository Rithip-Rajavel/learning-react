import {React,useState} from 'react';

function Garage() {
    const [Cars,setcars] = useState([]);
    const [carname,setcarname] = useState('');
    const [Carbrand,setcarbrand] = useState('');
    const [Showform,setshowform] = useState(false);

    const Addcar = ({carname,brandname}) => {
        const newcar = {name:carname,brand:brandname};
        setcars([...Cars,newcar]);
        
    }

    const RemoveCar =(index) =>{
        const newcars = [...Cars];
        newcars.splice(index,1);
        setcars(newcars);   
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        Addcar({carname,Carbrand});
        setshowform(false);
    }

    return (
        <div>
            <div>
                <h1>My Garage</h1><br />
                <ul>
                    {Cars.map((car,index)=>(
                        console.log(car),
                        <div>
                            <li key={index} >{car.name} and it's brand {car.brand}</li>
                            <button onClick={() => RemoveCar(index)}>Remove</button>
                        </div>
                    ))}
                </ul>
                {Showform ?(
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Car Name" value={carname} onChange={(e) => setcarname(e.target.value)} /><br />
                        <input type="text" placeholder="Car Brand" value={Carbrand} onChange={(e) => setcarbrand(e.target.value)} /><br />
                        <button type="submit">Add Car</button>   
                    </form>
                ) : (
                    <button onClick={() => setshowform(true)}>Add Car</button>
                )}
            </div>
        </div>
    )

}
export default Garage;
