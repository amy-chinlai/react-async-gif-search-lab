import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from '../components/GifSearch'

const GifList = props => {
    console.log(props)
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
        </div>
    )
}

export default GifList