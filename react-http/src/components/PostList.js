import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         albums:[],
         errorMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums1')
        .then(response => {
            console.log(response)
            this.setState({albums:response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'Error retrieving data'})
        })
    }
  render() {
    const {albums,errorMsg} = this.state
    return (
      <div>
        List of albums
        {
            albums.length?
            albums.map(album =><div key={album.id}>{album.title}</div>):
            null
        }
        {errorMsg ? <div>{errorMsg}</div>: null}
      </div>
    )
  }
}

export default PostList