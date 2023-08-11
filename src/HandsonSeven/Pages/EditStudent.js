import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { EditedStudent } from '../../feature/StudentSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useLocation();
    const studentId = data.state;
    console.log(studentId);
    const stdData = useSelector((state) => state.Student.filter((item) => item.id === studentId));
    const { Name, Age, Batch, Course } = stdData[0];

    const [newName, setName] = useState(Name)
    const [newAge, setAge] = useState(Age)
    const [newBatch, setBatch] = useState(Batch)
    const [newCourse, setCourse] = useState(Course)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(EditedStudent({
            id: studentId,
            newName,
            newAge,
            newBatch,
            newCourse
        }))
        navigate('/student');
    }
    return (
        <>
            <h1>Edit Student</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value={newName} onChange={(e) => setName(e.target.value)} />
                <label>Age</label>
                <input type='number' value={newAge} onChange={(e) => setAge(e.target.value)} />
                <label>Batch</label>
                <input type='text' value={newBatch} onChange={(e) => setBatch(e.target.value)} />
                <label>Course</label>
                <input type='text' value={newCourse} onChange={(e) => setCourse(e.target.value)} />
                <input type='submit' value='Edit' />
            </form>
        </>
    )
}

export default EditStudent