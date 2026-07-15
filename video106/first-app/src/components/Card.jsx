import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ overflow: "hidden" }}>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg"
          alt="Coding World"
          style={{ width: 333, border: "2px solid red" }}
        />
        <h3>{props.title}</h3>
        <p>{props.Description}</p>
      </div>
    </>
  );
};

export default Card;
