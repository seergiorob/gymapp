import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/png.png'

const Footer = () => {
  return (
    
    <Box mt="80px" mb='30px' bgColor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo" width='100px' height='100px' />

      </Stack>
    </Box>
  )
}

export default Footer