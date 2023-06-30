import { useState , useEffect } from 'react'
//Components
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { useParams } from 'react-router-dom'
// Utils
import { Videosa, fetchFromAPI } from '../Utility/fetchFromAPI'


export type VideoState = Videosa

const SearchFeed: React.FC = () => {
  const [videos, setVideos] = useState<VideoState[]>([])
  const { searchTerm } = useParams();



  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])
  

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} color= 'white'>
        Results  <span style={{ color: '#F31503'}}>Found</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed