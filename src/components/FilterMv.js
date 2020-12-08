import React from "react";

const FilterMv = ({ onSearchHandler, onSetrateHandler }) => {
  return (
    <div>
      <input
        className="serchInput"
        type="text"
        placeholder="Movie title"
        onChange={(e) => {
          onSearchHandler(e.target.value);
        }}
      />
      <input
        className="rateInput"
        type="number"
        min="0"
        max="5"
        placeholder="Movie rate"
        onChange={(e) => onSetrateHandler(e.target.value)}
      />
    </div>
  );
};

export default FilterMv;
