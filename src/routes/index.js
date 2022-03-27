import React from "react";

const mystyle = {
    color : "black",
    fontWeight : "bold",
    marginTop : "40vh"
};

export const Item1 = () => {
    console.log("item1 has selected!!!")
    return(
        <div style={mystyle}>
            <center>  <h1>This is Item  1</h1> </center>
        </div>
    )
}

export const Item2 = () => {
    return(
        <div style={mystyle}>
          <center>  <h1>This is Item  2</h1> </center>
        </div>
    )
}

export const Item3 = () => {
    return(
        <div style={mystyle}>
            <center>  <h1>This is Item  3</h1> </center>
        </div>
    )
}