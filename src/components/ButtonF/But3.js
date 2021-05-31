import React from "react";

const But3 = ({ pH, sText, updateData, de }) => {
  const [data1, setData1] = React.useState("a");

  const handleSubmit = (e) => {
    updateData(data1);
  };

  return (
    <div>
      <input
        placeholder={pH}
        onChange={(e) => {
          setData1(e.target.value);
        }}
      />

      <button className={de} onClick={handleSubmit}>
        {sText}
      </button>
    </div>
  );
};

export default But3;
