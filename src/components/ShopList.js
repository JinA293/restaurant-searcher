import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export default function ShopList(props) {
    return (
        // <h1>{props.shopName}</h1>
        <Card sx={{ display: 'flex' }}>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                <CardMedia
                    sx={{
                        width: "200px",
                        padding: "10px"
                    }}
                    component="img"
                    image={props.shop.photo.pc.l}
                    alt="shopPhoto"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to="/">
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.shop.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {props.shop.catch}
                            </Typography>
                            <br></br>
                            <Typography variant="body3" color="text.secondary">
                                アクセス：{props.shop.mobile_access}
                            </Typography>
                            <br></br>
                            <Typography variant="body3" color="text.secondary">
                                デイナー予算：{props.shop.budget.average}
                            </Typography>
                        </CardContent>
                    </Link>
                </Box>
            </CardActionArea>
        </Card>
    );
}