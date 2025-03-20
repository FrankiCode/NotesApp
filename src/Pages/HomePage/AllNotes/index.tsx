import { useRef, useState } from "react";
import useText from "../../../Component/GlobalState/NoteText"
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";


const AllNotes = () => {

  const { text, deleteButton } = useText()
  const [changeNote, setChangeNote] = useState()


  const deleteNote = (id) => {
    const isAgree = confirm("do you want to delete it?")
    if (isAgree) {
      deleteButton(id)
    }
  }

  const changeText = useRef()

  // const changeButton = () = {
  //   const newTitle = text.title;
  //   const newNote = text.text;

  //   const obj = {
  //     title: newTitle,
  //     text: CreateNewNote,
  //   };


  // }


  return (
    <div className="grid grid-cols-3 gap-1">
      {
        text.map(({id, text, date, title}) => {
          return <div key={id} className="relative border py-1 px-1">
            <div>
              <h2 className="">{title}</h2>
              <p>{text}</p>
              <span>{date}</span>
            </div>
            <div className="absolute bottom-1 right-2 flex gap-1 ">
              <AiTwotoneDelete className="text-[18px] cursor-pointer" onClick={() => deleteNote(id)}/>
              <CiEdit className="text-[18px] cursor-pointer"
              values={changeNote}
              ref={changeText}
              onChange={(e) => {setChangeNote(e.target.value)}}
              />
            </div>
          </div>
        })
      }
    </div>
  )
}

export default AllNotes