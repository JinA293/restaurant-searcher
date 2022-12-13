import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import "../App.css";


export default function DenseAppBar() {
  return (
      <AppBar position="static" color='warning' sx={{ height: '60px'}}>
        <Toolbar>
          <Link to="/" style={{ color: '#000', fontSize: '30px', fontWeight: 'bold' }}>
            Restaurant Searcher
          </Link>
        </Toolbar>
      </AppBar>
  );
}