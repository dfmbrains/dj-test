import { useState } from 'react'
import { Typography } from '@mui/material'
import classes from './EventDetails.module.css'
import Tag from '../../components/atoms/tag/Tag'
import { Modal } from '../../components/molecules'
import { Button } from '../../components/atoms'

export const EventDetails = () => {
   const [modal, setModal] = useState(false)

   const toggleModalHandler = () => {
      setModal((prevState) => !prevState)
   }

   const closeModalHandler = () => {
      setModal((prevState) => !prevState)
   }
   return (
      <section className={classes.eventDetails}>
         <div className={classes.eventSection}>
            <div className={classes.titleBox}>
               <Typography variant={'h1'} className={classes.h1}>
                  Event name
               </Typography>
               <Tag>Techno</Tag>
            </div>

            <div className={classes.avatarContainer}>
               <div className={classes.avatar}></div>
               <Typography variant={'overline'}>Studio 338</Typography>
            </div>
         </div>
         <div className={classes.typographyContainer}>
            <Typography variant={'subtitle1'}>
               Location
            </Typography>
            <Typography variant={'subtitle2'}>
               Studio 338, 338 Boord St, London SE10 0PF
            </Typography>
         </div>

         <Typography variant={'subtitle1'}>
            Time
         </Typography>
         <div className={classes.typographyContainer}>
            <Typography variant={'subtitle2'}>
               Saturday 25th June 2022{' '}
            </Typography>
            <Typography variant={'subtitle2'}>
               10:30 PM (5 hours)
            </Typography>
         </div>
         <div className={classes.typographyContainer}>
            <Typography variant={'h2'}>
               Description
            </Typography>
            <Typography variant={'body1'}>
               Friday night techno. Need someone experienced to cover up.
            </Typography>
         </div>

         <div className={classes.typographyContainer}>
            <Typography variant={'h2'}>
               Pay
            </Typography>
            <Typography variant={'body1'}>£200</Typography>
         </div>

         <div className={classes.btnBox}>
            <Button className={classes.actionBtn} onClick={toggleModalHandler}>
               Apply
            </Button>
            {modal && (
               <Modal
                  children={undefined}
                  onClick={closeModalHandler}
                  message={'You need to be logged in to apply for this event'}
               />
            )}
         </div>
      </section>
   )
}
