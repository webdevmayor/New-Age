import React, { useState } from "react";

// Set Quotes
const Learning = () => {
    const [counter, SetCounter] = useState(0);
    const [quote, setQuote] = useState([
        "The fact that it is difficult doesn't make it impossible",
        "Life is like a river",
        "We learn together we build together",
        "Life is like an open book",
    ]);
    
    // New Quotes to be added by users
    const [newQuote, setNewQuote] = useState(" ");
    const addQuote = () => {
        setQuote([...quote,newQuote]);
        setQuote(" ");
    };

    return (
        <div 
           style={{
             width: '100%',
             height: '100%',
             minHeight: "100vh",
             backgroundColor: "lightpink",
            //  display: "flex",
             alignItems: "center",
             flexDirection: "column",
          }}
        >
            <h2 style={{
                color: "whitesmoke",
                fontFamily: "sans-serif",
                marginTop: "2em",
            }}>My Component</h2>

            <div style={{
               marginTop: "1.8em",
              
             }}
            > 
            <input type="text" 
              style={{
                padding: "0.7em" ,
                border: "none",
                width: "17em",
                outline: "none",
                color: "orangered"
              }}
            />
            
              <button style={{
                padding: "0.7em",
                border: "none",
                backgroundColor: "burlywood"
              }}>
                Add
              </button>
            </div>  

            <div style={{
                marginTop: "3em",
                display: "flex",
                // justifyContent: "space-around",
                paddingRight: "30px"
             }}
            >
                
               
                <button style={{
                    padding: "1em 2.1em"
                }}>
                    -
                </button>
                
               
                <button style={{
                    padding: "1em 2.1em"
                }}>
                    +
                </button>
                
            </div>

        </div>
    )
}






export default Learning;