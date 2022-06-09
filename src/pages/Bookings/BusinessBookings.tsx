import { Button } from '../../components/atoms'
import {Link} from 'react-router-dom'
import classes from './DjBookings.module.css'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ROUTES } from '../../utils/constants/general'

export const BusinessBookings = () => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate(ROUTES.CREATE_EVENT)
   }
   const manageBookedEventHandler = () => {}
   const viewMyEventsHandler = () => {
      navigate(ROUTES.EVENT_REQUEST)
   }

   return (
      <main className={classes.mainContainer}>
         <div className={classes.infoAction}>
            <Button className={classes.bookingBtn}>Bookings</Button>
            <Link to={ROUTES.BUSINESS_CALENDAR}>
               <Button className={classes.btn}>Calendar</Button>
            </Link>
         </div>
         <div className={classes.bookingsContent}>
            <div className={classes.businessInfo}>
               <div className={classes.avatar}></div>
               <div>
                  <Typography variant="h5">Studio 338</Typography>
                  <Typography variant="overline">£200/h</Typography>
               </div>
            </div>
            <div>
               <Typography variant="h5">Total events</Typography>
               <Typography variant="overline">23</Typography>
            </div>
            <div>
               <Typography variant="h5">Requested DJ's</Typography>
               <Typography variant="overline">45</Typography>
            </div>
            <Button className={classes.btn} onClick={navigateHandler}>
               Create Event
            </Button>
         </div>
         <Typography variant="h2">My Events</Typography>
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
               <Typography variant="subtitle1">Requests</Typography>
               <Typography variant="overline" className={classes.euro}>
                  23
               </Typography>

               <Button
                  className={classes.whiteBtn}
                  onClick={viewMyEventsHandler}
               >
                  VIEW
               </Button>
            </div>
         </section>
         <Typography variant="h2">Booked</Typography>
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
