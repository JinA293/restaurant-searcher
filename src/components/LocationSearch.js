import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import ShopList from './ShopList'
import SelectForm from './SelectForm'
import Paging from './Paging';
import "../App.css";


// ここで現在地と店舗の座標を取得したのちに取得範囲で絞り込んだ店舗のデータをpropsでShopListに渡す
const ErrorText = () => (
    <p className="App-error-text">geolocation IS NOT available</p>
);

export default function Location() {
    const API_KEY = process.env.REACT_APP_GOURMET_API_KEY
    const [isAvailable, setAvailable] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [range, setRange] = useState('');
    const [shops, setShops] = useState();
    const [page, setPage] = useState(1)
    let renderedShops = []

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
            getCurrentPosition();
            getShopList();
        }
    }, [isAvailable, range, page]);

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude });
        });
    };

    async function getShopList() {
        await axios
            .get('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + `&lat=34.67&lng=135.52&range=${range}&order=4&count=100&format=json`)
            .then(res => {
                const startNum = page  * 10 - 10;
                const endNum = startNum + 10;
                setShops(JSON.parse(JSON.stringify(res.data.results.shop)).slice(startNum, endNum));
            })
            .catch(err => { console.log(err); })
    }

    if (isFirstRef.current) return <div className="App">Loading...</div>;
    if (!shops) return null;
    return (
        <div>
            <h1>エリアから探す</h1>
            <div style={{display: 'flex'}}>
                <h3>地名からの距離</h3>
                <SelectForm setRange={setRange} />
                <h3>で検索する</h3>
            </div>
            <div className="getLocation">
                {!isFirstRef && !isAvailable && <ErrorText />}
                {isAvailable && renderedShops && (
                    <div>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'spaceBetween'
                        }}>
                            {shops.map((shop) =>
                                <ShopList shop={shop} />
                            )}
                        </div>
                        <Paging page={page} setPage={setPage} />
                    </div>
                )
                }
            </div>
        </div>
    )
}