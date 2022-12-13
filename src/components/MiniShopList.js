import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import "../App.css";

export default function MiniShopList(props) {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            width: '30%',
            height: 'auto',
            border: '2px solid orange',
            margin: '15px',
        }}>
            <Link to={"/shopinfo/" + props.shop.id} onClick="reload()">
                <CardActionArea sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}>
                    <CardMedia
                        sx={{
                            width: "auto",
                            hheight: '100px',
                            padding: "5px"
                        }}
                        component="img"
                        image={props.shop.photo.pc.s}
                        alt="shopPhoto"
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5">
                                {props.shop.name}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Link>
        </Card>
    );
}