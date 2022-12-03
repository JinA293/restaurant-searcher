import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar'
import IconButton from '@mui/material/IconButton';

export default function Home() {
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