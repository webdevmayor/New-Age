import React, { useState } from "react";
import "./Profile.css";
import img from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

const Profile = () => {
  const [post, setPost] = useState([
    {
      name: "Israel Rollins",
      stack: "Bootstrap",
      image: img,
      id: 1,
    },
    {
      name: "Chinenye Ingrid",
      stack: "Javascript",
      image: img2,
      id: 2,
    },
    {
      name: "Naomi Campbell",
      stack: "Python",
      image: img3,
      id: 3,
    },
    {
      name: "Bravo Jonny",
      stack: "Typescript",
      image: img4,
      id: 4,
    },
  ]);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h2 className="header">Student Profile</h2>

          <div className="inputWrap">
            <div className="innerWrap">
              <img />
              <div className="inputs">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Stack" />
                <input className="imgInput" type="file" id="pics" />
                <label htmlFor="pics">Upload</label>
                <button>Post</button>
              </div>
            </div>
          </div>

          <div className="cardWrap">
            {post.map((props) => (
              <div className="card" key={props.id}>
                <img src={props.image} />
                <div className="name">{props.name}</div>
                <div className="detail">
                  <div>{props.stack}</div>
                  <div>30secs</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
