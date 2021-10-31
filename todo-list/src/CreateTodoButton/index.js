import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    // Le enviamos una función la que nos devolverá el estado anterior a la actualización. Con !prevState devolvemos la negación del estado anterior, o sea, si tenemos un true, dvolverá un false
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
