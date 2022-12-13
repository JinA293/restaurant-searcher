import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';



export default function ShopList(props) {

    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            width: '45%',
            height: 'auto',
            border: '3px solid orange',
            margin: '15px',
            padding: '10px'
        }}>
            <Link to={"/shopinfo/" + props.shop.id}>
                <CardActionArea sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
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
                    </Box>
                </CardActionArea>
            </Link>
        </Card>
    );
}