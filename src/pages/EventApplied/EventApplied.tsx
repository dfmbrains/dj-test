// import { useState } from 'react'
import { Typography } from '@mui/material'
import classes from './EventApplied.module.css'
import Tag from '../../components/atoms/tag/Tag'
import { Button } from '../../components/atoms'

export const EventApplied = () => {
   // const [modal, setModal] = useState(false)

   // const toggleModalHandler = () => {
   //    setModal((prevState) => !prevState)
   // }
   return (
      <section className={classes.eventDetails}>
         <div className={classes.titleBox}>
            <Typography variant={'h1'}>Event name</Typography>
            <Tag>Techno</Tag>
         </div>
         <Typography className={classes.marginBig} variant={'subtitle1'}>
            Location
         </Typography>
         <Typography variant={'subtitle2'}>
            Studio 338, 338 Boord St, London SE10 0PF
         </Typography>
         <Typography className={classes.marginBig} variant={'subtitle1'}>
            Time
         </Typography>
         <Typography variant={'subtitle2'}>Saturday 25th June 2022 </Typography>
         <Typography className={classes.marginSmall} variant={'subtitle2'}>
            10:30 PM (5 hours)
         </Typography>
         <Typography className={classes.marginBig} variant={'h2'}>
            Description
         </Typography>
         <Typography variant={'body1'}>
            Friday night techno. Need someone experienced to cover up.
         </Typography>
         <Typography className={classes.marginBig} variant={'h2'}>
            Pay
         </Typography>
         <Typography variant={'body1'}>£200</Typography>
         <div className={classes.btnBox}>
            <Button className={classes.actionBtn}>Applied ✓</Button>
         </div>
      </section>
   )
}
