import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";





function App() { 

  let [notes, setNotes] = useState([])

  // I can pass this addNote Function to the child Component CreateArea
  let addNote = (note) => {    
    setNotes([...notes, note])   
    console.log(note, notes)
  }

  let handleDelete = (id) =>{ 
    setNotes(preV => {
      return preV.filter((noteItem, index) => {
        return index !== id;
      }) 
    })
    console.log("Delete Clicked and I'm in App")
  } 


 


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((singleNote, index) => {
       /* We can create this Function in the Return Statement
        This Note Component only instatiate when the first note is added */
        return <Note 
        title={singleNote.title} 
        content={singleNote.content}
        delClicked={handleDelete} 
        key={index}
        id={index}       
        />
      })}  

    
      <Footer />
    </div>
  );
}

export default App;
