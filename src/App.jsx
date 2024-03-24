import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css';
import Home from './component/Home/Home';
import MyFooter from "./component/Footer/MyFooter";
import Determine from "./component/DetermineChalet/determineChalet";
import Login from "./component/Login/Login";
import ViewChalet from "./component/ViewChalet/ViewChalet";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/determine-chalet" element={<Determine />} />
          <Route path="/view-chalet" element={<ViewChalet />} />

          <Route path="/login" element={<Login />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
