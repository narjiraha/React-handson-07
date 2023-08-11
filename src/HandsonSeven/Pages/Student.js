import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router-dom'

const Student = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1>Student's Details</h1>
                <button onClick={() => navigate('/addnewstudent')}>Add New Student</button>
                <div>
                    <StudentData />
                </div>
            </div>
        </>
    )
}

export default Student