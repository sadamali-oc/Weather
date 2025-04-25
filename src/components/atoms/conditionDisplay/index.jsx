import React from 'react'
import { Typography } from '@mui/material'

const ConditionDisplay = ({description}) => {
  return (
    <div>
      <Typography variant="body1">Condition: {description}</Typography>
    </div>
  )
}

export default ConditionDisplay