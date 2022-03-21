import React from "react";

export const SearchFilter = ({handleOnGenderChange, hanldeOnSearch}) => {
  return (
    <div className="header__form">
      <div className="row">
        <div className="col">
          <input className="form-control"
          
            type="text" onChange={hanldeOnSearch}
            id=""            
          />
        </div>
        <div className="col">
          <select  className="form-control"
            name="" onChange={handleOnGenderChange}
            id=""
          >
            <option value="">--select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      
    </div>
  );
};
