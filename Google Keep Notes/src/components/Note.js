
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Note(props) {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    
    <div className="noteWrapper" style={{display:"flex",flexDirection:"row"}}>
      <div className="note">
       <h1>{props.title}</h1>
       <br/>
       <p>{props.content}</p>
       <button className="btn" onClick={deleteNote}>
       <DeleteOutlineIcon />
       </button>
    </div>
    </div>
  )
}

export default Note;
