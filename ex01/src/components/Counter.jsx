import React, { useState } from 'react'
import {Button, Card} from 'react-bootstrap';

const Counter = () => {
    const [count, setCount] = useState(100);

    const style={
        fontSize:'25px',
        color:'red'
    }
    
    const onClickInc = () => {
        setCount(count+1);
    }
    const onClickDec = () => {
        setCount(count-1);
    }

    return (
    <Card className='m-3'>
        <Card.Header>
            <h1 style={style}>카운터</h1>
        </Card.Header>
        <Card.Body>
            <Button variant='outline-danger' onClick={()=>setCount(count-5)}>5씩 감소</Button>
            <Button variant='outline-warning' onClick={onClickDec}>감소</Button>
            <span className='mx-3' style={{fontSize:'20px', color:'purple'}}>{count}</span>
            <Button variant='outline-info' onClick={onClickInc}>증가</Button>
            <Button variant='outline-primary' onClick={()=>setCount(count+5)}>5씩 증가</Button>
        </Card.Body>
    </Card>
  )
}

export default Counter