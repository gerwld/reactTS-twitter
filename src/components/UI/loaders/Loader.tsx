import React from 'react'
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className="loading_block">
      <CircularProgress />
    </div>
  )
}

export default Loader