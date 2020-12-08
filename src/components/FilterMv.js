import React from "react";

const FilterMv = ({ onSearchHandler }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          onSearchHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default FilterMv;
