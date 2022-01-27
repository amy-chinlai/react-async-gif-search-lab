import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'
import GifList from '../components/GifList'

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
      }

    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
        )
    }
}

export default GifSearch