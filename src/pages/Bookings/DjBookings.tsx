import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/atoms'
import classes from './DjBookings.module.css'
import { Typography } from '@mui/material'
import { ROUTES } from '../../utils/constants/general'

export const DjBookings = () => {
   const navigate = useNavigate()
   const manageBookedEventHandler = () => {}

   const navigateHandler = () => {
      navigate(ROUTES.DJ_CALENDAR)
   }
   return (
      <main className={classes.mainContainer}>
         <div className={classes.infoAction}>
            <Button className={classes.bookingBtn}>Bookings</Button>
            <Button className={classes.btn} onClick={navigateHandler}>Calendar</Button>
         </div>
         <div className={classes.bookingsContent}>
            <div className={classes.businessInfo}>
               <div className={classes.avatar}></div>
               <div>
                  <Typography variant="h5">DJ Koze</Typography>
                  <Typography variant="overline">£200/h</Typography>
               </div>
            </div>
            <div>
               <Typography variant="h5">Total bookings</Typography>
               <Typography variant="overline">23</Typography>
            </div>
            <div>
               <Typography variant="h5">Total earnings</Typography>
               <Typography variant="overline">£4 867</Typography>
            </div>
            <div>
               <Typography variant="h5">Applied</Typography>
               <Typography variant="overline">2</Typography>
            </div>
         </div>
         <Typography variant="h2">Requests</Typography>
         <section className={classes.eventContainer}>
            <div className={classes.eventInfo}>
               <div className={classes.eventName}>
                  <Typography variant="h5">Event name</Typography>
                  <Button>Techno</Button>
               </div>

               <Typography variant="subtitle1">London</Typography>
               <Typography variant="overline">
                  Saturday 25th June 2022{' '}
               </Typography>
               <Typography variant="overline">10:30 PM (5 hours)</Typography>
               <Typography variant="body1" className={classes.t}>
                  Friday night techno. Need someone experienced to cover up.
               </Typography>
            </div>
            <div className={classes.paymentInfo}>
               <Typography variant="subtitle1">Total pay:</Typography>
               <Typography variant="overline" className={classes.euro}>
                  £1000
               </Typography>
               <div className={classes.btnContainer}>
                  <Button className={classes.whiteBtn}>ACCEPT</Button>
                  <Button className={classes.blackBtn}>REJECT</Button>
               </div>
            </div>
         </section>
         <Typography variant="h2">Upcoming</Typography>
         <section className={classes.eventContainer}>
            <div className={classes.eventInfo}>
               <div className={classes.eventName}>
                  <Typography variant="h5">Event name</Typography>
                  <Button>Techno</Button>
               </div>

               <Typography variant="subtitle1">London</Typography>
               <Typography variant="overline">
                  Saturday 25th June 2022{' '}
               </Typography>
               <Typography variant="overline">10:30 PM (5 hours)</Typography>
               <Typography variant="body1" className={classes.t}>
                  Friday night techno. Need someone experienced to cover up.
               </Typography>
            </div>
            <div className={classes.paymentInfo}>
               <Typography variant="subtitle1">Total pay:</Typography>
               <Typography variant="overline" className={classes.euro}>
                  £1000
               </Typography>

               <Button
                  className={classes.whiteBtn}
                  onClick={manageBookedEventHandler}
               >
                  MANAGE
               </Button>
            </div>
         </section>
      </main>
   )
}
