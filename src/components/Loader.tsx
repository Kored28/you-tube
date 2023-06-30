import { Skeleton } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
    </div>
  )
}

export default Loader