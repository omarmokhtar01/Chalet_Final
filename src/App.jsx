import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css';
import Home from './component/Home/Home';
import MyFooter from "./component/Footer/MyFooter";
import Determine from "./component/DetermineChalet/determineChalet";
import Login from "./component/Login/Login";
import ViewChalet from "./component/ViewChalet/ViewChalet";
import { useEffect } from "react";
import ViewChaletOwner from "./component/ViewChalet/ViewChaletOwner";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/determine-chalet/:id" element={<Determine />} />
          <Route path="/view-chalet/:id" element={<ViewChalet />} />
          <Route path="/view-chalet-owner/:id" element={<ViewChaletOwner />} />

          <Route path="/home" element={ <Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
