import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "../../feature/StudentSlice";
// import Student from '../../Data';
import { useNavigate } from "react-router-dom";

const AddNewStudent = () => {
  const studentList = useSelector((state) => state.Student);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Batch, setBatch] = useState("");
  const [Course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Name);
    // console.log(Age);
    // console.log(Batch);
    // console.log(Course);
    dispatch(
      AddStudent({
        Id: studentList.length + 1,
        Name,
        Age,
        Batch,
        Course,
      })
    );
    setName("");
    setAge("");
    setBatch("");
    setCourse("");
    navigate("/student");
  };
  return (
    <>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Batch</label>
        <input
          type="text"
          value={Batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <label>Course</label>
        <input
          type="text"
          value={Course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default AddNewStudent;
