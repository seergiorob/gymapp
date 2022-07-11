import React from 'react'
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import '../App.css'

function Footer() {
  return (
    <div className="footerWrapper">
        
        <Box>
        <Link className="iconsFooter" underline="none" href="https://www.linkedin.com/in/sergio-robledo-9b1a33187/"> 
                <LinkedInIcon className="iconsFooter"/>
                <Typography className="textFooter" >@Sergio Robledo</Typography>
        </Link>
        <Link className="iconsFooter" underline="none" href="https://github.com/seergiorob"> 
                <GitHubIcon className="iconsFooter"/>
                <Typography className="textFooter">@seergiorob</Typography>
        </Link>
        <Link className="iconsFooter" underline="none" href="mailto:seergiorobledo@gmail.com" > 
                <EmailIcon className="iconsFooter"/>
                <Typography className="textFooter">@seergiorobledo</Typography>
        </Link>
        </Box>
        

            
    </div>
  )
}

export default Footer