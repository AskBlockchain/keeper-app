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

  let handleDelete = () => console.log("Delete Clicked and I'm in App") 


 


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((singleNote) => {
        return <Note 
        title={singleNote.title} 
        content={singleNote.content}
        delClicked={handleDelete} 
        
        />
      })}  

    
      <Footer />
    </div>
  );
}

export default App;
