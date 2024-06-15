import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Projects from "./pages/projects"


const name = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/about" element={<About/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
};

export default name;
