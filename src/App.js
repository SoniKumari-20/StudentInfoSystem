import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
// import { MUI } from './muiComponent/MUI';

import { SignIn } from "./SignIn";
import SignUp from "./SignUp";
import Form from "./StudentData/Form";
import Todo from "./StudentData/Todo";
import UpdateStudent from "./StudentData/UpdateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/students" element={<Todo />}></Route>
            <Route path="/students/:id" element={<UpdateStudent />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
