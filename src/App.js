import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyEmpAdd from "./components/CompanyEmpAdd";
import CompanyEmpSearch from "./components/CompanyEmpSearch";
import CompanyEmpView from "./components/CompanyEmpView";
import CompanyEmpDelete from "./components/CompanyEmpDelete";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CompanyEmpAdd />}></Route>
          <Route path="search" element={<CompanyEmpSearch />}></Route>
          <Route path="delete" element={<CompanyEmpDelete />}></Route>
          <Route path="view" element={<CompanyEmpView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
