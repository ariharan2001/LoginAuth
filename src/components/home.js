import React from "react";
import { logout } from "../login_status";
import "../style/home.css";

const Home = () => {
    console.log("pressed")
    return(
        <div>
            <button className="logout" onClick={logout}>logout</button>
            This is home page...
        </div>
    );
};

export default Home;