import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const StudentData = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.Student);
    // console.log(data)
    return (
        <div>StudentData:
            {
                data.map((item, index) => {
                    return (
                        <div key={index} style={{ display: 'flex' }}>
                            <div>{item.Name} {item.Age} {item.Batch} {item.Course}</div>
                            <button onClick={() => {
                                const id = item.id;
                                navigate('/editstudent', { state: id });
                            }}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudentData