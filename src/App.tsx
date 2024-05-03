import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Authentication/LoginPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
