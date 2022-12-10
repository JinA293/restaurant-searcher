import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {useParams} from "react-router-dom";

export default function ShopInfo(props) {
    // const search = useLocation().search;
    // const query2 = new URLSearchParams(search);
    const {id} = useParams();

    return (
        <div>
            <div>shopid:{id}</div>
        </div>
    );
};