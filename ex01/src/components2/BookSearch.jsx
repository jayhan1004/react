import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
import ModalBook from './ModalBook';

const BookSearch = () => {
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(false);
    const [query, setQuery] = useState('자바');
    const [books, setBooks] = useState([]);

    const callAPI = async() => {
        setLoading(true);
        const url=`https://dapi.kakao.com/v3/search/book?target=title&query=${query}&size=12&page=${page}`;
        const config = {
            headers:{"Authorization":"KakaoAK 4d7c9518ca2440e4cf64acec6fcc0a63"}
        }
        const res = await axios.get(url, config);
        console.log(res.data);
        setBooks(res.data.documents);
        setLast(res.data.meta.is_end);
        setTotal(res.data.meta.pageable_count);
        // setTimeout(()=>{
        //     setLoading(false);
        // }, 2000);
        setLoading(false);
    };

    useEffect(()=>{
        callAPI();
    },[page]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(query===""){
            alert("검색어를 입력하세요.");
        }else{
            setPage(1);
            callAPI();
        }
    }
    
    if(loading) return <div className='text-center my-5'><Spinner/></div>

    return (
        <div className='my-5 bookSearch'>
            <h1 className='text-center mb-5'>도서검색</h1>
            <Row className='mb-3'>
                <Col xs={8} md={6} lg={4}>
                    <form onSubmit={onSubmit}>
                        <InputGroup>
                            <Form.Control onChange={(e)=>setQuery(e.target.value)}
                                value={query} placeholder='검색어'/>
                            <Button type="submit">검색</Button>
                        </InputGroup>
                        
                    </form>
                </Col>
                <Col>
                    <span className='mb-2 ms-3'>검색결과 : {total} 개</span>
                </Col>
            </Row>
            <Row>
                {books.map(book=>
                    <Col xs={6} md={3} lg={2} className='mb-3'>
                        <Card>
                            <Card.Body>
                                <ModalBook book={book}/>
                            </Card.Body>
                            <Card.Footer>
                                <div className='ellipsis title'>{book.title}</div>
                            </Card.Footer>
                        </Card>    
                    </Col>
                )}
            </Row>
            {total > 12 &&
            <div className='text-center'>
                <Button onClick={()=>setPage(page-1)} disabled={page===1} variant='outline-dark'>이전</Button>
                <span className='mx-3'>{page}</span>
                <Button onClick={()=>setPage(page+1)} disabled={last===true} variant='outline-dark'>다음</Button>
            </div> }
        </div>
    )
}

export default BookSearch