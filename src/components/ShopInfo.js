import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function ShopInfo(props) {
    const { id } = useParams();
    const API_KEY = process.env.REACT_APP_GOURMET_API_KEY
    const [shop, setShop] = useState();
    useEffect(() => {
        getShopInfo();
    }, [])
    async function getShopInfo() {
        await axios
            .get('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + `&id=${id}&format=json`)
            .then(res => {
                console.log(res.data);
                setShop(JSON.parse(JSON.stringify(res.data.results.shop[0])))
                console.log(shop);
            })
            .catch(err => { console.log(err); })
    }
    function go() {
        window.open("https://www.hotpepper.jp/str" + id);
    }

    if (!shop) return null;
    return (
        <div>
            <Card sx={{
                display: 'flex',
                border: '1px solid orange',
                margin: '30px',
                height: '100%'
            }}>
                <div style={{flexDirection: 'column'}}>
                <CardMedia
                    sx={{
                        height: "150px",
                        width: "150px",
                        padding: "10px"
                    }}
                    component="img"
                    image={shop.logo_image}
                    alt="shopPhoto"
                />
                <CardMedia
                    sx={{
                        height: "150px",
                        width: "150px",
                        padding: "10px"
                    }}
                    component="img"
                    image={shop.photo.pc.l}
                    alt="shopPhoto"
                />
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="body3" color="text.secondary">
                            {shop.genre.catch}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {shop.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {shop.catch}
                        </Typography>
                        <br></br>
                        <Typography variant="body3" color="text.secondary">
                            アクセス：{shop.access}
                        </Typography>
                        <br></br>
                        <Typography variant="body3" color="text.secondary">
                            デイナー予算：{shop.budget.average}
                        </Typography>
                        <br></br>
                        <Typography variant="body3" color="text.secondary">
                            営業時間：{shop.open}
                        </Typography>
                        <br></br>
                        <Typography variant="body3" color="text.secondary">
                            住所：{shop.address}
                        </Typography>
                        <div>
                            <Button onClick={go} variant="contained" size="large" sx={{mt:"15px"}}>ホットペッパーグルメで見る</Button>
                        </div>
                    </CardContent>
                </Box>
            </Card>
        </div>

    );
};