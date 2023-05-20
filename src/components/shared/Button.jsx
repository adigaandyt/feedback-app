import React from "react";
//button style comp, takes children(input)
//Type (button type, submit, button etc)
//Version (CSS style names, primary secondary )
//isDisabled (if the button is on or not)
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

//default values of props
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};
//Could also add Button.propTypes

export default Button;
