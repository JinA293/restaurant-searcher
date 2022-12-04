import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import ShopList from './ShopList'

// ここで現在地と店舗の座標を取得したのちに取得範囲で絞り込んだ店舗のデータをpropsでShopListに渡す
const ErrorText = () => (
    <p className="App-error-text">geolocation IS NOT available</p>
);

export default function Location() {
    const API_KEY = process.env.REACT_APP_GOURMET_API_KEY
    const [isAvailable, setAvailable] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    let [shops, setShops] = useState();

    // useEffectが実行されているかどうかを判定するために用意しています
    const isFirstRef = useRef(true);
    /*
     * ページ描画時にGeolocation APIが使えるかどうかをチェックしています
     * もし使えなければその旨のエラーメッセージを表示させます
     */
    useEffect(() => {
        isFirstRef.current = false;
        if ('geolocation' in navigator) {
            setAvailable(true);
            // console.log(process.env.REACT_APP_GOURMET_API_KEY)
            getCurrentPosition();
            getShopList();
        }
    }, [isAvailable]);

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude });
            console.log(latitude, longitude)
        });
    };

    const getShopList = () => {
        axios
            .get('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&lat=34.67&lng=135.52&range=5&order=4&format=json')
            .then(res => {
                console.log(res.data);
                // let newShops = JSON.stringify(res.data.results.shop)
                // newShops = JSON.parse(newShops)
                setShops(res.data.results.shop);
                shops = JSON.parse(JSON.stringify(res.data.results.shop))
                console.log(shops);
            })
            .catch(err => { console.log(err); })
    }

    // useEffect実行前であれば、"Loading..."という呼び出しを表示させます
    if (isFirstRef.current) return <div className="App">Loading...</div>;

    return (
        <div>
            <h1>エリアから探す</h1>
            <h3>地名から--km</h3>
            <div className="getLocation">
                {!isFirstRef && !isAvailable && <ErrorText />}
                {isAvailable && shops &&(
                    shops.map((shop) => 
                        <ShopList shop = {shop} />
                        // shop={shop}
                    )
                    )
                }
            </div>
        </div>
    )
}