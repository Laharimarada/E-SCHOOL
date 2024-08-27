import { Typography, Card } from "@material-tailwind/react";
import { MultiLevelSidebar } from "./components/Sidebar";
import Global from "./components/Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagesStudents from "./components/ManagesStudents";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Global />}>
          <Route path="/" element={<ManagesStudents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
