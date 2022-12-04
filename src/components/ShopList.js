import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ShopList(props) {
    return (
        // <h1>{props.shopName}</h1>
        <Card>
            <Link to="/">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.shop.photo.pc.s}
                        alt="shopPhoto"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.shop.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.shop.catch}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            {props.shop.open}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.shop.mobile_access}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.shop.budget.average}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}