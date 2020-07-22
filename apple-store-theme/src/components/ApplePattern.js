import React from 'react'
import { Box } from 'theme-ui'

export const ApplePattern = () => {
  return (
    <Box
      sx={{
        color: 'primaryMid',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    >
      <svg width="100%" height="100%" fill="currentcolor">
        <defs>
          <pattern
            id="apple-pattern"
            x="0"
            y="0"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path d="M20,11c.95-1.6,4.13-2.3,4.13-2.3l-1.54-1.6a6.46,6.46,0,0,0-2.28,1.11,6.75,6.75,0,0,0-6-7.42s-.9,3.4.69,5.83a7.46,7.46,0,0,0,4.19,2.76,5.3,5.3,0,0,0-.56,1c-14.45-13-21,18.33-7.78,18.77C19.19,39,40,13.36,20,11Z" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#apple-pattern)"
        />
      </svg>
    </Box>
  )
}
