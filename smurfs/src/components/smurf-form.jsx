import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const changeName = e => {
    setName(e.target.value);
  };
  const changeAge = e => {
    setAge(e.target.value);
  };
  const changeHeight = e => {
    setHeight(e.target.value);
  };

  const newSmurf = {
    name: name,
    age: age,
    height: height
  };


  return (
    <div>
      <form onSubmit={() => props.addSmurf(newSmurf)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={changeName}
        />
        <input type="text" placeholder="Age" value={age} onChange={changeAge} />
        <input
          type="text"
          placeholder="Height"
          value={height}
          onChange={changeHeight}
        />
        <button>Add New Smurf</button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfForm);
