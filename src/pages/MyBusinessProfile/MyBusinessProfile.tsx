import { NavLink } from 'react-router-dom'
import classes from './MyBusinessProfile.module.css'
import { Card, Tag } from '../../components/atoms'
import { Instagram, CloudLogo } from '../../assets/icons'
import { Typography } from '@mui/material'

export const MyBusinessProfile = () => {
   return (
      <main className={classes.mainContainer}>
         <div className={classes.mainContent}>
            <div className={classes.left}>
               <div className={classes.ava}></div>
               <Typography variant="h1">Studio 338</Typography>
               <div className={classes.logoContainer}>
                  <Instagram />
                  <CloudLogo />
               </div>
            </div>
            <div className={classes.right}>
               <Typography variant="h2">About</Typography>
               <Typography variant="body1">
                  Stefan Kozalla aka DJ Koze lives and works in Hamburg and
                  Cadaqués. His Profession: DJ, Musician (International Pony,
                  Adolf Noise) and Remixer for many, including Gorillaz,
                  Moderat, Matthew Dear, Låpsley, Caribou, Who Made Who,
                  Lawrence and many others.
               </Typography>
               <Typography variant="h2">Location</Typography>
               <Typography variant="subtitle1">London</Typography>
               <Typography variant="overline">
                  Studio 338, 338 Boord St, London SE10 0PF
               </Typography>
            </div>
         </div>
         <nav>
            <NavLink
               to="/#"
               className={({ isActive }) =>
                  isActive ? classes.nonActive : classes.isActive
               }
            >
               Past Events
            </NavLink>
            <NavLink
               to="/#"
               className={({ isActive }) =>
                  isActive ? classes.nonActive : classes.isActive
               }
            >
               Upcoming Events
            </NavLink>
         </nav>
         <div className={classes.eventsContainer}>
            <Card className={classes.card}>
               <Typography>Friday night techno</Typography>
               <Typography>12/03/2022</Typography>
               <div>
                  <Tag>Techno</Tag>
                  <Tag>Tech-house</Tag>
                  <Tag>Minimal techno</Tag>
               </div>
            </Card>
            <Card className={classes.card}>
               <div></div>
            </Card>
            <Card className={classes.card}>
               <div></div>
            </Card>
         </div>
      </main>
   )
}
