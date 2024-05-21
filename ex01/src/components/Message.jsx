import React, { useState } from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const Message = () => {
    const [message, setMessage] = useState('')
    const [textcolor, setTextColor] = useState('purple')

  return (
    <>
        <Row className='my-5'>
            <Col>
                <h1 style={{color:textcolor}}>{message}</h1>
                <br/>
                <br/>
                <Button variant='outline-dark' onClick={()=>setMessage('안녕하세요')} className='mx-3'>입장</Button>
                <Button variant='outline-dark' onClick={()=>setMessage('안녕히가세요')} className='mx-3'>퇴장</Button>
                <br/>
                <br/>
                <br/>
                <Button variant='outline-danger' onClick={()=>setTextColor('red')} className='mx-3'>빨강</Button>
                <Button variant='outline-primary' onClick={()=>setTextColor('blue')} className='mx-3'>파랑</Button>
                <Button variant='outline-success' onClick={()=>setTextColor('green')}className='mx-3'>초록</Button>
            </Col>
        </Row>
    </>
    //jsx는 return타입이라 하나의 태그 안으로 묶어서 return해야함
    //따라서 태그가 여러개일땐 상위에 빈 태그 하나라도 묶어줘야함
  )
}

export default Message