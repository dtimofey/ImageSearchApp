import React from 'react'
import './ImageSearch.css'

const ImageSearch = ({ handleGetRequest }) => {
    console.log()
    return (
        <div className="imageSearch">
            <form onSubmit={handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete='off' name='searchValue' placeholder='search for images...' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default ImageSearch