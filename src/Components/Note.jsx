import React from "react";


function Note({ title, content, delClicked }) {

  let deleteNote = () => {
    delClicked()
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
