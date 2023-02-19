import React from "react";

function Dropdowngenre(props) {

  return (
    <div>
      <select className="dropdown" value={props.selectedValueGenre} onChange={props.handleSelectChangegenre} required>
      <option selected value="">- - Genre - -</option>
        <option value="Thriller">Thriller</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
      </select>
    </div>
  );
}

export default Dropdowngenre;