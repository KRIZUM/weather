import React from 'react';
import './styles/index.scss'
import {Routes, Route} from "react-router-dom";
import {MonthStatistics} from "./pages/MonthStatistics/components/MonthStatistics";
import {Home} from "./pages/Home/components/Home";
import {Header} from "./shared/Header/Header";



function App() {
  return (
      <div className="global">
    <div className="container">
        <Header/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
        </Routes>
    </div>
      </div>
  );
}

export default App;
