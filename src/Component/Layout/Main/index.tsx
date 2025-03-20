import { NavLink } from "react-router";
import RouterHomePage from "../../RouterHomePage";


const Main = () => {
  return (
    <div className="w-full h-[calc(100vh-50px)] grid grid-cols-[200px_1fr] gap-2.5">
        <div className="bg-gray-300 flex flex-col pt-2 pl-2 gap-2.5">
            <NavLink to="/allnote" className="border w-[180px] py-1 px-2 rounded hover:bg-gray-400 duration-300">All Notes</NavLink>
            <NavLink to="/newnote" className="border w-[180px] py-1 px-2 rounded hover:bg-gray-400 duration-300">Add New Note</NavLink>
        </div>
        <div>
            <RouterHomePage/>
        </div>
    </div>
  )
}

export default Main;