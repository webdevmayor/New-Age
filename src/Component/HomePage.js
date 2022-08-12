import React, { useState, useEffect } from "react";

const HomePage = () => {
  //useState hook
  const [item, setItem] = useState(0);

  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const addition = () => {
    setItem(item + 1);
  };
  const sub = () => {
    setItem(item - 1);
  };
  //useEffect
  useEffect(() => {
    setInterval(() => {
      setSecs((el) => el + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setMins((el) => el + 1);
    }, 60000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightcyan",
        display: "flex",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          flexDirection: "column",
        }}
      >
        <h2>My first react class</h2>
        <div>Hey guys, it's gonna be fun here</div>
      </div>
      <div
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "30px",
          flexDirection: "column",
        }}
      >
        <h4>Counter App</h4>
        <div
          style={{
            display: "flex",
            width: "150px",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              padding: "5px 15px",
              backgroundColor: "red",
              border: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
            }}
            onClick={() => {
              sub();
            }}
          >
            -
          </button>
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "25px",
            }}
          >
            {item}
          </div>
          <button
            style={{
              padding: "5px 15px",
              backgroundColor: "blue",
              border: "none",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
            }}
            onClick={() => {
              addition();
            }}
          >
            +
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <h4>Timer</h4>
        <div>
          {" "}
          {mins}mins : {secs % 60}secs
        </div>
      </div>
    </div>
  );
};
export default HomePage;
