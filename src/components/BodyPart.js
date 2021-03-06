import React from 'react'
import {Stack, Typography} from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  console.log(item)
  return (
    <Stack 
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {setBodyPart(item);
    window.scrollTo({top:1800, left: 100, behavior: 'smooth'})}
    }
    
    >
      {/* <img src={Icon} alt='dumbell' style={{width: '40px', heigth: '40px'}} /> */}
      <Typography
      fontWeight='bold'
      fontSize='30px'
      color='#242424'
      textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart