import React from 'react'
// Components
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";

import { demoChannelUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from '../Utility/constant';

type Props = {
  videos: any;
}

const VideoCard: React.FC<Props> = ({videos : { id: { videoId}, snippet}}) => {

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '312px'}, boxShadow: 'none', borderRadius: '0', gap: 2, }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: '100%', sm: '358px', md: '312px'}, height: 185}}
        />
      </Link>
      <CardContent
       sx={{ backgroundColor: '#1e1e1e', height: '100px'}}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard