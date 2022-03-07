
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNote(props) {
  const[note,setnote]=useState({
    title:"",
    content:"",
  });
  const InputEvent=(event)=>{

    const{name,value}=event.target;
    setnote((prevData)=>{
      return {
        ...prevData,
        [name]:value,
      }
    });
    console.log(note);
  };
  const addEvent=()=>{
props.passNote(note);
setnote({
  title:"",
  content:"",
})
  };
  return (
    <div className="main_note">
        <form class="formWrapper">
            <input type="text"  name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete='off' className="inputWrapper"/><br/>
            <textarea rows="4" name="content"column="4" value={note.content} onChange={InputEvent} placeholder="Write a note"/>
            <Button className="plus_sign" onClick={addEvent}>
            <AddIcon/>
            </Button>
            </form>
        </div>
  )
}

export default CreateNote;
