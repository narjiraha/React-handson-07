import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <ul>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/student'><li>Student</li></Link>
                <Link to='/contact'><li>ContactUs</li></Link>
            </ul>
        </nav>
    )
}

export default Header