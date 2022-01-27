import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }


    fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp =>  resp.json())
        .then(data => {
            console.log(data.data)
            this.setState({
                gifs: data.data.map( gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return (
            <div>
                < GifList gifs={this.state.gifs}/>
                < GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}

export default GifListContainer