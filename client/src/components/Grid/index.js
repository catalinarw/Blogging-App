import React from "react";

//EXPORTING THE Container, Row, AND Col COMPONENTS FROM THIS FILE

//THIS CONTAINER COMPONENT ALLOWS US TO USE A BOOTSTRAP CONTAINER WITHOUT WORRYING ABOUT CLASS NAMES
export function Container({ fluid, children }) {

  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;

}

//THIS ROW COMPONENT ALLOWS US TO USE A BOOTSTRAP ROW WITHOUT WORRYING ABOUT CLASS NAMES
export function Row({ fluid, children }) {

  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;

}

// THIS Col COMPONENT LETS US SIZE BOOTSTRAP COLUMS WITH LESS SYNTAX
// e.g. <Col size="md-12"> INSTEAD OF <div className="col-md-12">
export function Col({ size, children }) {

  return (

    <div

      className={size

        .split(" ")

        .map(size => "col-" + size)

        .join(" ")}

    >

      {children}

    </div>

  );
  
}
