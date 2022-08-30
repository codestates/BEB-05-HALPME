import { useState } from "react";
import { useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import '../../assets/styles/post/Pagebar.css'

function Pagebar({ getPage, limit, posts }) {
    let [page, setPage] = useState(1) // 현재 페이지

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
            <Pagination.First className="pagination-item" id="pagination-item" onClick={() => movePage(1)} />
            {
            pages.map(pg => {
                if (pg === page) return <Pagination.Item className={`pagination-item pagination-item-${pg}`} id="pagination-item-active" key={pg} onClick={() => movePage(pg)} active >{pg}</Pagination.Item>
                else return <Pagination.Item className={`pagination-item pagination-item-${pg}`} id="pagination-item" key={pg} onClick={() => movePage(pg)} >{pg}</Pagination.Item>
            }
            )}

            {/* <Pagination.Ellipsis /> */}
            <Pagination.Last id="pagination-item" onClick={() => movePage(pages.length)} />
        </Pagination>
    );
}
  
export default Pagebar;