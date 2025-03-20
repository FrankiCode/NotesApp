import { useRef, useState } from "react";
import { v4 } from "uuid";
import { INoteText } from "../../../Component/Layout/InterFace/NoteText";
import useText from "../../../Component/GlobalState/NoteText";
import AllNotes from "../AllNotes";


const CreateNewNote = () => {


  const {text, myNewNote} = useText();

  const [note, setNote] = useState<INoteText[]>([
    {id:"",title: "", text:"", date: "" },
  ]);


  const addDateRef = useRef();
  const addTextRef = useRef();
  const addTitleRef = useRef();
  const addNewNote = () => {
    const newNoteText = {
      id: v4(),
      title:addTitleRef.current.value,
      text:addTextRef.current.value,
      date:addDateRef.current.value,
    } 
    if(addTextRef.current.value.trim()) {
      setNote([...note, newNoteText])
      myNewNote(newNoteText);
      addTitleRef.current.value = "";
      addTextRef.current.value = "";
    } else {
      alert("note yaz")
    }    
  }


  return (
    <div className="flex flex-col gap-2.5">
      <input type="text" 
      placeholder="add a title" 
      ref={addTitleRef}
      className="py-1 px-5 outline-none"/>
      <textarea rows={10}
        placeholder="add your note"
        className="border outline-none pt-5 pl-5 rounded"
        ref={addTextRef}></textarea>
      <div className="flex gap-5">
        <input type="date" className="w-[200px]" ref={addDateRef}/>
        <input type="submit" className="bg-amber-200 w-[200px] cursor-pointer rounded py-0.5 font-thin text-[18px]" onClick={addNewNote}/>
      </div>
    </div>
  )
}

export default CreateNewNote