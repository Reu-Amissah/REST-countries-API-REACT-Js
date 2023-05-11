import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Screens/LandingPage";

function App() {
  return (
    <>
      <div id="body">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<h2>Hello</h2>} />
      </Routes>
    </>
  );
}

export default App;
