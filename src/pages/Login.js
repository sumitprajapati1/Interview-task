import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";
const Login=()=>
{
    const [username,setName]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigation=useNavigate();
    const handlelogin=async(e)=>
    {
        e.preventDefault();
        try{
            const response=await fetch("https://dummyjson.com/auth/login",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            const data = await response.json();
            if(response.ok){
                localStorage.setItem("token",data.token);
                navigation("/Products");
            }
            else
            {
                setError("Invalid Details");
            }
        }
        catch(error)
        {
            setError("Error occurred ");
        }
    }
    return(
        <>
        <h1> Login </h1>
        <form onSubmit={handlelogin}>
            <input type="text" placeholder="Name" value={username}
             onChange={
                (e)=>setName(e.target.value)
             }/>

            <input type="password" placeholder="Password" value={password} 
            onChange={
                (e)=>setPassword(e.target.value)
            }/>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>    
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}
export default Login;