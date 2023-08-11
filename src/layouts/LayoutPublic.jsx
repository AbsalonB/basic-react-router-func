import { Outlet } from "react-router-dom";

const LayoutPublic =()=>{
    return(
        <>
            <div className="container">
              <Outlet/>
            </div>
            <footer>Este es el footer</footer>
        </> 
        )
}

export default LayoutPublic;