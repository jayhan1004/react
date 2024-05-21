import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

const Students = () => {
    const [students, setStudents] = useState([
        {no:101, name:'엄복동', address:'창고', phone:'010-1111-2222'},
        {no:102, name:'마동석', address:'진실의방', phone:'010-3333-4444'},
        {no:103, name:'우디', address:'책상위', phone:'010-5555-6666'}
    ]);

    return (
        <div className='m-5'>
            <h1>학생목록</h1>
            <Table striped bordered hover variant='warning'>
                <thead>
                    <tr>
                        <td>학생번호</td>
                        <td>학생이름</td>
                        <td>학생주소</td>
                        <td>학생전화</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s=>
                        <tr>
                            <td>{s.no}</td>
                            <td>{s.name}</td>
                            <td>{s.address}</td>
                            <td>{s.phone}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}

export default Students