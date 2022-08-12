import React from "react";

const Slider = () => {
    return (
        <div style={{
            textAlign: 'center',
            fontSize: '10px',
            background: '#FFDEAD',
            height: '100vh', 
            margin: '0',
            padding: '0',
            width: '100%',
            overflow: 'hidden'
         }}
        >
           
            <form>
            <h2 style={{
                fontSize: '20px',
            }}>
                My Component
            </h2>
                <input type = 'text' style={{
                    padding: '0.9em',
                    width: '30%',
                    border: 'none',
                    outline: 'none'
                }}></input>
                <button style={{
                    padding: '0.9em',
                    background: 'hotpink',
                    border: 'none',
                }}>ADD</button>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '12em'
                    }}>
                            <div>
                            <button style={{
                        padding: '1em 2em',
                        background: 'hotpink',
                        border: 'none',
                        }}>
                            -
                          </button>

                        </div>
                         <div>
                            <button style={{
                        padding: '1em 2em',
                        background: 'lightblue',
                        border: 'none',
                        }}>
                                +
                            </button>
                         </div>
                    </div>
            </form>
        </div>
    )
};

export default Slider