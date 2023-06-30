import React from 'react'
// Components
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Stack, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'
import { fetchFromAPI } from '../Utility/fetchFromAPI'
import Loader from './Loader'


type VideoDetailItem  = {
  snippet: {
    title: string,
    channelId: string,
    channelTitle: string, 
  },
  statistics: {
    viewCount: string,
    likeCount: string,
  }
  // Add other properties as needed
}


const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetailItem | null>(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()


  console.log(videoDetail )
  useEffect (() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data?.items))
  }, [id])

  if(!videoDetail?.snippet) return <Loader />

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack direction="row" justifyContent='space-between'
              sx={{ color: '#fff'}}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography sx={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7}}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7}}>
                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box px={2} py={{ md: 1, xs: 5}} justifyContent='center' alignItems='center' >
        <Videos  videos={videos}  />
      </Box>
    </Box>
  )
}

export default VideoDetail