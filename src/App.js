//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailFilm from "./pages/DetailFilm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedComponent from "./component/ProtectedComponent";

function App() {
  return (
    <div className="App" style={{  alignContent: 'center', backgroundColor: "#343a40"}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/DetailFilm/:MovieID"
          element={
            <ProtectedComponent>
              <DetailFilm />
            </ProtectedComponent>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
