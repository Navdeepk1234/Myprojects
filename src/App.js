import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer"
import React ,{useState} from "react"
import { valueToPercent } from '@mui/base';
function App() {
  const[addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return  [...prevData,note];
    });
    console.log(note);
  };
  const onDelete=(id)=>{
setAddItem((olddata)=>
  olddata.filter((currdata,indx)=>{
return indx !==id;
})
);
  };
  return (
    <div className="App">
     <Header/>
     <CreateNote passNote={addNote} />
     {/* <Note/> */}
     {addItem.map((val,index)=>{
        return <Note key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
     })
    }
     <Footer/>
    </div>
  );
}

export default App;
