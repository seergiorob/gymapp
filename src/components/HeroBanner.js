import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/test2.jpg'

const HeroBanner = () => {
  return (
    <Box
    sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }}
    position='relative' p='20px'>
    
      {/* <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
        EQ Sport
      </Typography> */}
      <Typography fontWeight={700}
      sx={{fontSize: {lg: '44px', xs:'40px'}}}
      mb='23px'
      mt='30px'>
      
      
        Live Life <br/> Fully Activated.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises

      </Typography>
      <Button variant='contained' color='error' href='#exercises' 
      sx={{
        backgroundColor: '#ff2625',
        padding: '10px',
      }}
      >Explore Exercises</Button>
      <Typography
      fontWeight={600}
      color='rgb(200, 200, 200)'
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      fontSize='220px'
      mt='30px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' 
      className='hero-banner-img'
      />
    </Box>
  )
}

export default HeroBanner