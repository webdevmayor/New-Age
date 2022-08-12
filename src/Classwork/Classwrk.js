import React from "react";
//import './Classwrk.css';


const Classwrk = () => {
    
    return(
        <>
        <div className="top">
            <div className="middle">
                <h2 className="header">STUDENT PROFILE</h2>
                <div className="input">
                <div className="container">
                    <img src= {image}/>
                    <div className="inputs">
                               <input type="texts" placeholder="Name"
                        value={newName}
                        onChange= {(e) => {}}/>     
                                   </div>
                </div>

                </div>
                
            </div>

        </div>
            </>
           

    )

}
export default Classwrk;