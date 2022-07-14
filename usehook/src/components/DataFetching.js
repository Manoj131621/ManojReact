import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [albums,setAlbums] = useState([])
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    const handleclick =() =>{
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setAlbums(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick])
  return (
    <div>
        
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleclick}>Fetch Post</button>
            <div>{albums.title}</div>
            {/* {albums.map(album=>(
                <li key={album.id}>{album.title}</li>
            ))} */}
        
    </div>
  )
}

export default DataFetching