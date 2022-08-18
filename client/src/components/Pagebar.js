import { useState } from "react";
import { useSelector } from 'react-redux';

import Pagination from 'react-bootstrap/Pagination';


function Pagebar({ getPage, limit }) {
    let [page, setPage] = useState(1) // 현재 페이지
    let posts = useSelector((state) => state.posts)

    // 페이지 개수 리스트
    let pages = []
    for (let i = 1; i <= Math.ceil(posts.length / limit); i++) {
      pages.push(i)
    }

    let movePage = (pg) => {
        setPage(pg)
        getPage(pg)
      }
    return (
        <Pagination className="Pagination justify-content-center">
            <Pagination.First className="pagination-item" onClick={() => movePage(1)} />
            {
            pages.map(pg => {
                if (pg === page) return <Pagination.Item className={`pagination-item pagination-item-${pg}`} key={pg} onClick={() => movePage(pg)} active >{pg}</Pagination.Item>
                else return <Pagination.Item className={`pagination-item pagination-item-${pg}`} key={pg} onClick={() => movePage(pg)} >{pg}</Pagination.Item>
            }
            )}

            {/* <Pagination.Ellipsis /> */}
            <Pagination.Last onClick={() => movePage(pages.length)} />
        </Pagination>
    );
}
  
export default Pagebar;