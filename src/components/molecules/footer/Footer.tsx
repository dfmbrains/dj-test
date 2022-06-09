import React from 'react'
import classes from './Footer.module.css'
import { Instagram, Youtube, Twitter, Spotify } from '../../../assets/icons'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export const Footer = () => {
   return (
         <footer className={classes.footer}>
            <div className="container">
               <Typography variant={'h6'}>
                  © 2022 Phono Ltd. All rights reserved.
               </Typography>
               <ul className={classes.menu}>
                  <li>
                     <Link to={'/'}>
                        <Typography color={'white'} variant={'h6'}>
                           Privacy
                        </Typography>
                     </Link>
                  </li>
                  <Typography variant={'h6'}>•</Typography>
                  <li>
                     <Link to={'/'}>
                        <Typography color={'white'} variant={'h6'}>
                           Terms
                        </Typography>
                     </Link>
                  </li>
                  <Typography variant={'h6'}>•</Typography>
                  <li>
                     <Link to={'/'}>
                        <Typography color={'white'} variant={'h6'}>
                           Cookies
                        </Typography>
                     </Link>
                  </li>
               </ul>
               <div className={classes.icons}>
                  <Link to={'/#'}>
                     <Twitter />
                  </Link>
                  <Link to={'/'}>
                     <Youtube />
                  </Link>
                  <Link to={'/'}>
                     <Instagram />
                  </Link>
                  <Link to={'/'}>
                     <Spotify />
                  </Link>
               </div>
            </div>
         </footer>
   )
}

export default Footer
