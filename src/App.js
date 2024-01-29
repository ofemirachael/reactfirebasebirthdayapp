import "./App.css";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Birthday from "./components/birthday/Birthday";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/birthday" element={<Birthday />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
