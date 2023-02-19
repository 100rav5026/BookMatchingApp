import React from "react";

function Dropdownpages(props) {
  return (
    <div>
      <select className="dropdown" value={props.selectedValuePages} onChange={props.handleSelectChangepages} required>
        <option selected value="">- - Pages - -</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
      </select>
    </div>
  );
}

export default Dropdownpages;