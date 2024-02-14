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


  /* This handleDelete Function is passed to the Note Component via the delClicked props
  The Function calls the setNotes useState Function, it passes a unique id then runs a 
  array.filter Function.
  Like the array.map Function the filter Function accepts up to three arguments. 
  The first is the item and second is the index. We can use the index as a unique id*/


  // let handleDelete = (id) => {
  //   setNotes(notes.filter((noteItem, index) => {
  //     return index !== id     
  //   }    
  //   ))    
  //   console.log("Delete Note was Cicked", id, notes )
  // }

  /*
  The main difference between the two functions is how they capture the notes state when filtering. Both functions aim to remove a note with a specific ID from the notes array, but they differ in the way they access the current state (notes).

In the first function, notes is accessed directly from the outer scope, meaning it captures the value of notes at the time the function is defined. If notes changes after this function is defined but before it's executed, those changes won't be reflected in the operation.
In the second function, notes is captured from the previous state using a functional update form of the state setter (setNotes). This ensures that the current state (preV) is used when filtering, regardless of when the function is actually executed. This approach is safer when dealing with asynchronous updates, such as those caused by user interactions or other state changes.
The functional update form of setState is commonly used in React to ensure that state updates are based on the latest version of the state, especially when the new state depends on the old state. This pattern helps prevent bugs that could occur due to stale state values 
  */


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
        This Note Component only instatiate when the first note is added.
        The map function takes 3 parameters. The first is the items of the array and the second
        is the index. We can use the index as a unique identifier */
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
