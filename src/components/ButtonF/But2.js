import React from "react";
import But3 from "./But3";

const But2 = () => {
  const [data2, setData2] = React.useState("");

  const handleSubmit = (data) => {
    setData2(data);
  };

  return (
    <div>
      <h2>I am 2nd Statement </h2>
      <But3
        pH="input 2 "
        sText="submit 2"
        updateData={handleSubmit}
        de="but2"
      />

      <p>{data2}</p>
      {/*   <input
        type="text"
        placeholder="enter input"
        onChange={(e) => setData2(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};

export default But2;
