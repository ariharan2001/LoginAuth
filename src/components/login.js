import React from "react";
import  {useState} from "react";
import axios from "axios";
import { login } from "../login_status";
import "../style/login.css";

const Login = () => {
    const [data,setData] = useState({email:"",password:""});
    const [error,setError] = useState("");

    const handleChange = ({ currentTarget: input}) => {
        setData({...data,[input.name]: input.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8088/api/auth";
            const {data : res} = await axios.post(url,data);
            login(res.data);
            window.location = "/";
        } 
        catch (error){
            if( error.response && error.response.status >= 400 && error.response.status <= 500)
              setError(error.response.data.message);
        }  
    };
    return (
        <>
        <div className="container">
           <form onSubmit={handleSubmit}>
               <h1>Login Your Account</h1>
               <div><input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
               /></div>
               <div><input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
               /></div>
               {error && <div>{error}</div>}
              <button type="submit" className="submit">Log in</button>
           </form>
          </div>
        </>
    );
};

export  default Login;