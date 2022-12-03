import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchBar from './SearchBar'


export default function Home(){
    return (
        <div>
            <h1>Restaurant Searcher</h1>     
            <SearchBar />      
            <Link to="/area">Area</Link>
            <br />
            <Link to="/station">station</Link>
            <br />
            <Link to="/location">Location</Link>
        </div>
    );
};