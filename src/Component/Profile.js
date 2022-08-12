import React from "react";
import img from "./img/profile.jpg";
import img1 from "./img/css.jpg";
import img2 from "./img/java.jpg";
//import img3 from "./img/react.png";
import img4 from "./img/node.png";

    const Profile = () =>{
        return (
            <div style={{
                background: "tan",
                // fontFamily: "cursive",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                overflow: "hidden",
              }}
            >
                <h3
                style={{
                    fontSize: "2.3em",
                    textAlign: "center",
                    color: "orangered"

                }}>
                    My Profile
                </h3>

                <div style={{
                    width: "100%",
                    fontSize: "1.1em",
                    display: "flex",
                    justifyContent: "space-around",
                    }}>
                    <div style={{
                        maxWidth: "40%",
                        backgroundColor: "gray",
                        height: "50vh",
                        padding: "1.5em",
                    }}>
                        <h2
                        style={{
                            fontWeight: "500",
                            fontSize: "1.7em",
                            fontFamily: "Roboto"
                        }}>
                            Adah Bravo Amos
                        </h2>
                        
                        <p style={{
                            fontStyle: "italic",
                            width: "100%"
                        }}>
                            Web Developer
                        </p>
                        <p>
                            <b>Email:</b> Bravoadahson@gmail.com.
                        </p>
                        <p>
                            <b>Phone:</b> +234 8147824529
                        </p>
                        <p>
                            <b>Location:</b> Ikeja, Lagos Nigeria.
                        </p>
                    </div>
                    
                    <div>
                      <img src={img} alt=""
                      style={{
                        width: "35%",
                        height: "70%",
                        marginLeft: "40em",
                        mixBlendMode: "darken",
                        borderRadius: '50%',
                      }}/>
                    </div>
                </div>

                <div style={{
                        padding: "1.5em",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div>
                            <h1>
                                Education
                            </h1>
                            <p>
                                B.tech <br/>
                                Physics.
                            </p>
                            <p>
                                Federal University Of Technology, Minna.
                            </p>
                        </div>
                        <div style={{
                            marginRight: "10em",
                            marginTop: '-20em'
                        }}>
                            <h1>
                                Stack:
                            </h1>
                            
                        </div>
                    </div>

            </div>
        )
    }




export default Profile;