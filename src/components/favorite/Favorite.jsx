import React from 'react'
import { useSelector } from 'react-redux'
import Cards from "../cards/Cards"

function Favorite() {
    const {myFavorites}= useSelector((state) => state)
    return (
        <div>
                {
                <Cards characters={myFavorites}/>
                }
        </div>
    )
}

export default Favorite