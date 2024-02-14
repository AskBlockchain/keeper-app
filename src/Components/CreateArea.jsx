import React, { useState } from "react";


/* 
1. Create a state to store inputs into an Object
2. create a state to store an Array of the Objects
3. Create a function the add new Objects to the Array
4. Export the Array to App
*/

function CreateArea(props) { 

let [note, setNote] = useState({
  title: "",
  content: ""
})

let handleChange = (event) => {
  let {name, value} = event.target  
  setNote((preV) => ({ ...preV, [name]: value }))
  console.log(name, value)
}


// let [listOfNotes, setNewNote] = useState([])
// let addNewNote = (event) => {
//   setNewNote([...listOfNotes, note])
//   console.log(listOfNotes)
//   event.preventDefault()
// }


let addNewNote = (e) => {
  props.onAdd(note) // I'm getting the Function addNote from App and passing back the note Object
  setNote({ title: "", content: "" }); // Reset input fields after adding note
  e.preventDefault()
}

  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={addNewNote}>Add</button>        
      </form>   

{/*       
      {listOfNotes.map((singleNote) => (  
        <div>
          <h1>{singleNote.title}</h1>
          <p>{singleNote.content}</p>
        </div>          
      ))}  
      */}


      
     
    </div>
  );
}

export default CreateArea;
