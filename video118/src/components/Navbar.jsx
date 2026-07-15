import React, { memo } from "react";

const Navbar = ({ adjective, getadjective }) => {
  console.log("rerendering once again");
  return (
    <>
      <div>i am an {adjective} Navbar</div>
      <button
        onClick={() => {
          getadjective()
        }}
      >
        {getadjective() }
      </button>
    </>
  );
};

export default memo(Navbar);
