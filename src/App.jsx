import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./components/main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
