import React from 'react'
import classes from './Events.module.css'
import EventCard from '../../components/organisms/EventCard/EventCard'
import { Filter } from '../../components/organisms/Filter/Filter'
import { Typography } from '@mui/material'

export const Events = () => {
   return (
      <section className={classes.events}>
         <div className={classes.row}>
            <Typography variant={'h1'}>Events</Typography>
            <Filter />
         </div>
         <div className={classes.box}>
            <EventCard />
            <EventCard />
            <EventCard />
         </div>
      </section>
   )
}
