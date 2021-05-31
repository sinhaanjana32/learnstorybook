import React, { useState } from "react";
import But3 from "./But3";

const But1 = () => {
  const handleSubmit = (data) => {
    /*     e.preventDefault(); */
    console.log(data);
  };

  return (
    <div>
      <But3
        pH="input 1 "
        sText="submit 1"
        updateData={handleSubmit}
        de="but1"
      />

      {/*  <input
        type="text"
        placeholder="enter input 1-non index"
        onChange={(e) => {
          setData1(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit1</button> */}
    </div>
  );
};

export default But1;
