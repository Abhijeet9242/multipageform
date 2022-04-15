import logo from "./logo.svg";
import "./App.css";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form1 />}></Route>
        <Route path="/form2" element={<Form2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
