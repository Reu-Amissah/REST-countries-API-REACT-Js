import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Screens/LandingPage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
