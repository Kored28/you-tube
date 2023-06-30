import React from 'react'
// Components
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'


import { demoProfilePicture } from '../Utility/constant'

type Props ={
  channelDetail: any;
  marginTop: string
}

const ChannelCard: React.FC<Props> = ({ channelDetail, marginTop }) => {
  return (
    <Box 
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '350px', md: '300px'},
        height: '320px',
        margin: 'auto', 
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2,
              border: '1px solid #e3e3e3'
           }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography color='gray'>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard