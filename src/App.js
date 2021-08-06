import React from "react"

import ImageSearch from "./ImageSearch/ImageSearch"
import ImageList from "./ImageList/ImageList"

const API_KEY = '22270073-b729cd94681b94e951a6cc95b'

class App extends React.Component {

  state = {

    images: [],
    error: null

  }

  handleGetRequest = async (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.searchValue.value 
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({ images: response.hits })
    console.log(searchTerm)
    console.log(this.state.images)
  }
  
  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        {

        }
      </div>
    )
  }
}

export default App