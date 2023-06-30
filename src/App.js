import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Screens/LandingPage";
import Details from "./Screens/Details";
import BorderProps from "./Screens/BorderProps";

import Error from "./Screens/Error";

import { DarkModeProvider } from "./Components/DarkMode";

function App() {
  return (
    <DarkModeProvider>
      <div id="body">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="detail/:id" element={<Details />} />
        <Route path="border/:name" element={<BorderProps />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
