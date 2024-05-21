import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';

const Posts = () => {
    const [last, setLast] = useState(1);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setLast(Math.ceil(json.length/10));
            const start = (page-1) * 10 + 1;
            const end = (page*10);
            const data = json.filter(j=>j.id>=start && j.id<=end);
            //console.log(json)
            setPosts(data)
        });
    }

    useEffect(()=>{
        callAPI();
    },[]);

    return (
        <div>
        <h1>게시글 목록</h1>
        <Table striped bordered hover variant='outline-dark'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                </tr>
            </thead>
            <tbody>
                {posts.map(p=>
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                    </tr>
                    )}
            </tbody>
        </Table>
        <div className='mt-3 mb-2'>
            <Button onClick={()=>setPage(page-1)} disabled={page===1} variant='outline-dark'>이전</Button>
            <span className='mx-3'>{page}</span>
            <Button onClick={()=>setPage(page+1)} disabled={page===last} variant='outline-dark'>다음</Button>
        </div>
        <h6>총 페이지 수 : {last}</h6>
    </div>
    )
}

export default Posts