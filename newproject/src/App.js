
import './App.css';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import SearchCenter from './components/SearchCenter';
import ByPincode from './components/ByPincode';
import ByCity from './components/ByCity';
import Slots from './components/Slots';

import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SlotsComponent from './components/SlotsComponent';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    {/* <SearchCenter/> */}
    <Routes>
    <Route path="" element={<SearchCenter />} />
        <Route path="home" element={<SearchCenter />} />
        <Route path="faq" element={<FAQ />} />
        
        </Routes>
        
        {/* <Routes> */}
        {/* <Route path="bypincode" element={<ByPincode />} />
        <Route path="bycity" element={<ByCity />} /> */}
        {/* </Routes> */}
        
      
    
    {/* <SearchCenter/> */}
    {/* <Slots/> */}
    {/* <FAQ/> */}
    
  
    
    </BrowserRouter>
    
      </>
  );
}

export default App;
