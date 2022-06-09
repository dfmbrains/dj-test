import React from 'react'
import { Footer } from '../../components/molecules'
import { Button, Tag } from '../../components/atoms'
import classes from './EventRequests.module.css'
import { Typography } from '@mui/material'

export const EventRequest = () => {
   return (
      <main className={classes.mainContainer}>
         <Typography variant="h1">Event</Typography>
         <div className={classes.eventOverall}>
            <div className={classes.logo}></div>
            <div className={classes.event}>
               <div>
                  <Typography variant="h2">Event Name</Typography>
               </div>
               <Typography variant="h6">London</Typography>
               <Typography variant="overline">
                  Saturday 25th June 2022{' '}
               </Typography>
               <Typography variant="overline">10:30 PM (5 hours)</Typography>
               <Typography variant="body1">
                  Friday night techno. Need someone experienced to cover up.
               </Typography>
            </div>
         </div>
         <div className={classes.t}>
            <Typography variant="h3">Request 23</Typography>
            <Typography variant="h3">Requested 2</Typography>
         </div>
         <section className={classes.eventContainer}>
            <div className={classes.avatar}>
               <div></div>
               <Typography>£200/h</Typography>
            </div>
            <div className={classes.eventInfo}>
               <div className={classes.eventName}>
                  <Typography variant="h5">DJ Koze</Typography>
                  <Tag>Techno</Tag>
                  <Tag>Tech-house</Tag>
                  <Tag>Minimal techno</Tag>
               </div>

               <Typography variant="subtitle1">London</Typography>
               <div>
                  <Typography variant="body1" className={classes.bio}>
                     Stefan Kozalla aka DJ Koze lives and works in Hamburg and
                     Cadaqués. His Profession: DJ, Musician (International Pony,
                     Adolf Noise) and Remixer for many, including Gorillaz,
                     Moderat, Matthew Dear, Låpsley, Caribou, Who Made Who,
                     Lawrence and many others.
                  </Typography>
               </div>
            </div>
            <hr />
            <div className={classes.paymentInfo}>
               <Typography variant="subtitle1">Total pay</Typography>
               <Typography variant="overline">£1000</Typography>
               <div>
                  <Button className={classes.whiteBtn}>ACCEPT</Button>
                  <Button className={classes.whiteBtn}>REJECT</Button>
               </div>
            </div>
         </section>
      </main>
   )
}
