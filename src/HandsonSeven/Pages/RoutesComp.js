import React from 'react'
import HomePage from "./HomePage"
import ContactUsPage from "./ContactUsPage"
import AddNewStudent from "./AddNewStudent"
import EditStudent from "./EditStudent"
import Student from "./Student"
import { Route, Routes } from 'react-router-dom'

const RoutesComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/student" element={<Student />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/addnewstudent" element={<AddNewStudent />} />
                <Route path="/editstudent" element={<EditStudent />} />
            </Routes>
        </div>
    )
}

export default RoutesComp
