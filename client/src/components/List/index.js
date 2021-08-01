import React from "react";

import "./style.css";

// THIS FILE EXPORTS BOTH THE List AND ListItem COMPONENTS

export function List({ children }) {

  return (

    <div className="list-overflow-container">

      <ul className="list-group">{children}</ul>

    </div>

  );

}

export function ListItem({ children }) {

  return <li className="list-group-item">{children}</li>;
  
}
