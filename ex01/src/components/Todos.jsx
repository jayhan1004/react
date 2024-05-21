import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';

const Todos = () => {
    const [last, setLast] = useState(1);
    const [page, setPage] = useState(1);
    const [todos, setTodos] = useState([]);
    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            setLast(Math.ceil(json.length/10));
            const start = (page-1)*10 + 1;
            const end = (page*10); 
            const data = json.filter(j=>j.id >= start && j.id <= end);
            //console.log(data);
            setTodos(data);
      });
    }

    useEffect(()=>{
        callAPI();
    },[page]);

    return (
        <div>
            <h1>오늘의 할 일</h1>
            {todos.map(todo=>
                <div key={todo.id} style={{textAlign:'start'}} className='my-3'>
                    <input type="checkbox" defaultChecked={todo.completed}/>
                    {todo.id} : {todo.title}
                </div>
            )}
            <div className='mt-3 mb-2'>
                <Button onClick={()=>setPage(page-1)} disabled={page===1} variant='outline-dark'>이전</Button>
                <span className='mx-3'>{page}</span>
                <Button onClick={()=>setPage(page+1)} disabled={page===last} variant='outline-dark'>다음</Button>
            </div>
            <h6>총 페이지 수 : {last}</h6>
        </div>
    )
}

export default Todos