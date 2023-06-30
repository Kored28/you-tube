import React from 'react'
//Components
import { Stack, Box } from '@mui/material'
import {VideoState} from './Feed'
import {ChannelCard , VideoCard} from './'
import Loader from './Loader'

type Props = {
  videos: VideoState[];
}

const Videos: React.FC<Props> = ({videos}) => {
  if (!videos?.length) return <Loader/>
  return (
    <Stack 
     direction={'row'}
     flexWrap='wrap'
     gap={2}
     justifyContent='flex-start'
    >
        {videos.map((item, idx) => (
          <Box
           key ={idx}
          >
            { item.id.videoId && <VideoCard videos={item}/>}
            { item.id.channelId  && <ChannelCard channelDetail={item} marginTop={''}  />}
          </Box>
        ))}
    </Stack>
  )
}

export default Videos