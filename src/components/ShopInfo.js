import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MiniShopList from './MiniShopList';

export default function ShopInfo() {
    const { id } = useParams();
    const [ID, setID] = useState(id)
    const API_KEY = process.env.REACT_APP_GOURMET_API_KEY
    const [shop, setShop] = useState();
    const [otherShops, setOtherShops] = useState();
    let lat = 0;
    let lng = 0;

    useEffect(() => {
        getShopInfo();
    }, [])
    async function getShopInfo() {
        await axios
            .get('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + `&id=${ID}&format=json`)
            .then(res => {
                setShop(JSON.parse(JSON.stringify(res.data.results.shop[0])))
                lat = JSON.parse(JSON.stringify(res.data.results.shop[0].lat))
                lng = JSON.parse(JSON.stringify(res.data.results.shop[0].lng))
                getOtherShops(lat, lng)
            })
            .catch(err => { console.log(err); })
    }
    async function getOtherShops(lat, lng) {
        await axios.get('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + `&lat=${lat}&lng=${lng}&count=3&start=2&format=json`)
            .then(res => {
                setOtherShops(JSON.parse(JSON.stringify(res.data.results.shop)))
            })
            .catch(err => { console.log(err); })
    }
    function goGourmet() {
        window.open("https://www.hotpepper.jp/str" + ID);
    }
    function goGoogle() {
        window.open(`https://www.google.com/maps/search/${shop.name}`);
    }
    if (!shop || !otherShops) return null;
    return (
        <div>
            <Card sx={{
                display: 'flex',
                border: '1px solid orange',
                margin: '30px',
                height: '100%'
            }}>
                <div style={{ flexDirection: 'column' }}>
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
                        <div style={{ display: 'flex' }}>
                            <Button onClick={goGourmet} variant="contained" sx={{ m: "5px", mt: "30px", width: "50%", height: "75px" }}>ホットペッパーグルメで見る</Button>
                            <Button onClick={goGoogle} variant="contained" sx={{ m: "5px", mt: "30px", width: "50%", height: "75px" }}>GoogleMapで場所を確認する</Button>
                        </div>
                    </CardContent>
                </Box>
            </Card>
            <Typography variant="body1" sx={{ ml: '10px' }}>
                この店舗の近くのお店
            </Typography>
            <div style={{
                display: 'flex',
            }}>
                {otherShops.map((shop) =>
                    <MiniShopList shop={shop} />
                )}
            </div>
        </div>

    );
};