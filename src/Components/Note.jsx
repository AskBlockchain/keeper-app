import React from "react";


function Note({ title, content, delClicked, id }) {
  /* I've destructured the props variable */

  /* The deleteNote Function executes the props deleteNote Function 
  from App */

  let deleteNote = () => {
    delClicked(id)
  }


  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>      
      <button onClick={deleteNote}>DELETE</button>
    </div>
  );
}

export default Note;
