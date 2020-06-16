import React from "react"; 
import "./Wrapper.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
