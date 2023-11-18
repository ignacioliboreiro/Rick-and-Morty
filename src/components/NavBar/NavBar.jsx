import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import "./NavBarCSS.css"


const NavBar = ({onSearch}) => {
    return (
        <div className='navbar'>
            <SearchBar onSearch={onSearch} />
            <Link to="/about"><button className='botonNavBar' >About</button></Link>
            <Link to="/home"><button  className='botonNavBar'>Home</button></Link>
        </div>
    )
}

export default NavBar