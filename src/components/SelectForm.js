import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SelectForm(props) {
    const [value, setValue] = useState(3)

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);
        props.setRange(value);
    };

    const handleClick = () => {
        props.setRange(value);
    }

    return (
        <Box sx={{ maxWidth: '100px' }}>
            <FormControl fullWidth>
                <Select
                    labelId="range-label"
                    id="range-select"
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>300m</MenuItem>
                    <MenuItem value={2}>500m</MenuItem>
                    <MenuItem value={3}>1km</MenuItem>
                    <MenuItem value={4}>2km</MenuItem>
                    <MenuItem value={5}>3km</MenuItem>
                </Select>
            </FormControl>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
}