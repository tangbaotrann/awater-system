import { BrowserRouter, Route, Routes } from "react-router-dom";
import endPoints from "./routers";
import Login from "./pages/Login/Login";
import Manager from "./pages/Manager/Manager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endPoints.LOGIN} element={<Login />} />

        <Route path={endPoints.PUBLIC} element={<Manager />} />

        <Route path={endPoints.ALL} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
