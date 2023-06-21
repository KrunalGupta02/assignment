import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
