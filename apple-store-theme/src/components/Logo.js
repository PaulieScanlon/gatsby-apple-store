/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32px"
      height="32px"
    >
      <path
        sx={{
          fill: 'darken',
        }}
        d="M14.5,8.6c0.1,0.4-1.5,0.9-1.6,0c-0.6-3.6,2.4-5.8,2.4-5.8l2.3,0.9C17.5,3.7,13.9,6.4,14.5,8.6z"
      />
      <path
        sx={{
          // special case so the leaf is always green
          fill: '#6ab966',
        }}
        d="M12.8,6.5c0,0-3.7,1.1-6.4-0.6C3.7,4.1,3,0.3,3,0.3S6.7-0.7,9.4,1C12.1,2.7,12.8,6.5,12.8,6.5z"
      />
      <path
        sx={{
          fill: 'primary',
        }}
        d="M26.9,19.6c-1.7,8.1-7.4,14.7-13.3,11.7C7.9,34.1,1.9,27.8,0.2,19.6C-1.1,12.7,3.5,5.4,13.6,9.2
		C24.4,5.2,28.4,12.7,26.9,19.6z"
      />
    </svg>
  )
}
