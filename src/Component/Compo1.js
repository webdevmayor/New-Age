import React, { useState, useEffect } from "react";
import img from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";

const Compo1 = () => {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState([
    "Practice ten times daily",
    "Life is like a river",
    "Success is the key",
    "We learn together, we build together",
    "Life is an open book",
  ]);

  // New quotes
  const [newQuote, setNewQuote] = useState(" ");
  const addQuote = () => {
    setQuote([...quote, newQuote]);
    setNewQuote(" ");
  };

  //Image
  const [avatar, setAvatar] = useState([img, img2, img3, img4, img5]);

  const add = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    if (counter <= 0) {
      setCounter(quote.length);
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setCounter((e) => e + 1);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "lightpink",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          marginTop: "20px",
        }}
      >
        My Component
      </h3>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          style={{
            padding: "7px",
            border: "none",
          }}
          value={newQuote}
          onChange={(e) => {
            setNewQuote(e.target.value);
          }}
        />
        <button
          style={{
            padding: "7px 10px",
            border: "none",
            backgroundColor: "crimson",
            color: "white",
          }}
          onClick={() => {
            addQuote();
          }}
        >
          Add
        </button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          height: "400px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            marginLeft: "10px",
            padding: " 5px 15px",
            backgroundColor: "red",
            border: "none",
            fontWeight: "bold",
            fontSize: "18px",
            color: "white",
          }}
          onClick={sub}
        >
          -
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={avatar[counter % avatar.length]}
            style={{
              width: "250px",
              height: "180px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <div>{quote[counter % quote.length]}</div>
        </div>
        <button
          style={{
            marginRight: "10px",
            padding: " 5px 15px",
            backgroundColor: "blue",
            border: "none",
            fontWeight: "bold",
            fontSize: "18px",
            color: "white",
          }}
          onClick={add}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Compo1;
