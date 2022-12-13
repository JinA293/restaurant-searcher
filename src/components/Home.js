import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar'
import IconButton from '@mui/material/IconButton';
import "../App.css";

export default function Home() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Restaurant Searcher</h1>
                <SearchBar />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px'}}>
                <Button variant="contained" color="warning" size="large" sx={{height: 100}}>
                    <Link to="/area" style={{ color: '#FFF', fontSize: '20px', fontWeight: 'bold' }}>エリアから探す</Link>
                </Button>
                <Button variant="contained" color="warning" size="large">
                    <Link to="/station"  style={{ color: '#FFF', fontSize: '20px', fontWeight: 'bold' }}>駅から探す</Link>
                </Button>
                <Button variant="contained" color="warning" size="large">
                    <Link to="/location"  style={{ color: '#FFF', fontSize: '20px', fontWeight: 'bold' }}>現在地から探す</Link>
                </Button>
            </div>


        </div>
    );
};