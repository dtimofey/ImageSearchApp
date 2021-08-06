import React from 'react'

import { Link } from 'react-router-dom'

const ImageView = (props) => {
    console.log(props.location.state.image)
    const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image
    return (
        <div>
            <img src={image} alt={tags}></img>
            <p>&copy;pixabay</p>
            <h4>Credit: <span>{owner}</span></h4>
            <h4>Download: <span><a href={pageURL} target='_blank'>LINK TO DOWNLOAD</a></span></h4>
            <button><Link to='/'>HOME</Link></button>
        </div>
    )
}

export default ImageView