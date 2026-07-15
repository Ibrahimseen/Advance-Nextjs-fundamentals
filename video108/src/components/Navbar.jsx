import React, { useEffect, useState } from "react";

const Navbar = ({ color }) => {
  // Case 1 : Run on very reminder
  useEffect(() => {
    alert("hey i will run on every render");
  });

  // Case 2 : Run on first reminder
  useEffect(() => {
    alert("hey welcome to my page .this is the first render");
  }, []);

  // Case 3 : Run when certain value change
  useEffect(() => {
    alert("hey i am running because color was changed");
  }, [color]);

  // Example of Cleanup Function
  useEffect(() => {
    alert("hey this is a first render of jsx");
    return () => {
      alert("Components was unmounted");
    };  
  }, []);

  return;
  <div>i am a navbar of {color} color hehe</div>;
};

export default Navbar;
