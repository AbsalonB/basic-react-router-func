import Natbar from "./components/Natbar";
import {Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";
const App = () => {
  return(
    <>
      <Natbar/> 
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route element={<Inicio/>} path="/"></Route>
            <Route element={<Contact/>} path="/contacto"></Route>
            <Route element={<Blog/>} path="/blog"></Route>
            <Route element={<BlogDetails/>} path="/blog/:id"></Route>
            <Route element={<NotFound/>} path="*"></Route>
          </Route>
        </Routes>         
    </>
  )
}

export default App;