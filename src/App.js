import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Area from './components/AreaSearch'
import Station from './components/StationSearch'
import LocationSearch from './components/LocationSearch'
import NoMatch from './components/NoMatch'
import ShopInfo from "./components/ShopInfo";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div>
            <Header />
          <Routes>
            {/* それぞれのコンポーネント先でShopListにpropsを渡す形で表示 */}
            <Route path="/" element={<Home />}/> 
            <Route path="/area" element={<Area />} />
            <Route path="/station" element={<Station />} />
            <Route path="location" element={<LocationSearch />} />
            <Route path="/shopinfo/:id" element={<ShopInfo />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
);
}