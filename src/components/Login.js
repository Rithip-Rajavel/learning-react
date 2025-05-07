import {React,useState} from 'react';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const HandleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const HandlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,password);
        alert(`Login Successfull for Email: ${email}`);
        setEmail('');   
        setPassword('');
    }

    return (
        <div style = {style.login}>
            <h1>Login</h1>
            <form onSubmit = {HandleSubmit} style = {style.Form}>
                <input type = "email"
                    placeholder = "Enter your Email"
                    value = {email}
                    onChange ={HandleEmail} required />
                <input type = "password"
                    placeholder = "Enter your Password"
                    value = {password}
                    onChange ={HandlePassword} required />
                <button type = "submit" style = {style.button}>Login</button>
            </form>
        </div>
    )
}
const style = {
    login:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'200px',
        width:'300px',
        margin:'auto',
        border:'1px solid black',
        borderRadius:'10px',
        padding:'20px',
        backgroundColor:'lightgray',
    },
    Form:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:'10px',
        gap:'10px',
        padding:'10px',
    },
    button:{
        marginTop:'10px',
        padding:'10px',
        backgroundColor:'blue',
        color:'white',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
    }
}
export default Login;
