import React from "react";

import "./style.css";

function DeleteBtn(props) {

  return (

    //...props SPREADS ALL OF THE PASSED PROPS ONTO THIS ELEMENT, THAT WAY WE AVOID DEFINING THEM INDIVIDUALLY
    <span className="delete-btn" {...props} role="button" tabIndex="0">

      ✗

    </span>

  );
  
}

export default DeleteBtn;
