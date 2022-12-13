import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from 'react';


export default function Paging(props) {
    //ページ番号
    // const [page, setPage] = useState(1)

    // const Pagination = withStyles({
    //     root: {
    //         display: 'inline-block',  //中央寄せのためインラインブロックに変更
    //     },
    // })(MuiPagination);

    return (
        <div style={{ textAlign: 'center', padding: '15px' }}>
            <Pagination
                sx={{
                    display: 'inline-block',
                }}
                count={10}
                color='warning'
                onChange={(e, page) => props.setPage(page)}  //変更されたときに走る関数。第2引数にページ番号が入る
                page={props.page}         //現在のページ番号
            />
        </div>
    );


}
