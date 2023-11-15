import React from 'react'
import SearchBar from './SearchBar'


const NavBar = ({onSearch}) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default NavBar