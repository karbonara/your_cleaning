import Admin from "./Pages/Admin/Admin";
import Timetable from "./Pages/Client/timetable/Timetable";
import Layout from "./Pages/Client/Layout";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Pages/Client/main/Main";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/timetable" element={<Timetable />} />
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
