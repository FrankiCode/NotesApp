import { Route, Routes } from "react-router";
import AllNotes from "../../Pages/HomePage/AllNotes";
import CreateNewNote from "../../Pages/HomePage/CreateNewNote";


const RouterHomePage = () => {

    const homeRoute = [
        {id: 0, path: "/allnote", element:<AllNotes/>},
        {id: 1, path: "/newnote", element:<CreateNewNote/>},
    ]

  return (
    <div>
        <Routes>
            {
                homeRoute.map(({id, path, element}) => {
                    return <Route key={id} path={path} element={element}></Route>
                })
            }
        </Routes>
    </div>
  )
}

export default RouterHomePage;