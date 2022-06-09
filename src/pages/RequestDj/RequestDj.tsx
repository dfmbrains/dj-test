import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '../../assets/icons'
import { Button } from '../../components/atoms/button/Button'
import classes from './Request.module.css'
import { Typography } from '@mui/material'
import { ROUTES } from '../../utils/constants/general'

export const RequestDj = () => {
   const [requestStatus, setRequestStatus] = useState(false)
   const [requestStatus2, setRequestStatus2] = useState(false)

   const navigate = useNavigate()

   const requestEventHandler = () => {
      // setRequestStatus((prevState) => !prevState)
      navigate(ROUTES.PAYMENT)
   }
   const requestEventHandler2 = () => {
      // setRequestStatus2((prevState) => !prevState)
      navigate(ROUTES.PAYMENT)
   }

   return (
      <div className={classes.mainContainer}>
         <main>
            <Typography variant={'h1'}>Request</Typography>
            <div className={classes.djInfo}>
               <img src={Avatar} alt="avatar-dj" />

               <div>
                  <div className={classes.action}>
                     <Typography variant={'h2'}>DJ Koze</Typography>
                     <Button>Techno</Button>
                     <Button>Tech house</Button>
                     <Button>Minamal techno</Button>
                  </div>
                  <div className={classes.typographyContainer}>
                     <Typography variant={'h6'}>London</Typography>
                     <Typography variant={'body1'}>
                        Stefan Kozalla aka DJ Koze lives and works in Hamburg
                        and Cadaqués. His Profession: DJ, Musician
                        (International Pony, Adolf Noise) and Remixer for many,
                        including Gorillaz, Moderat, Matthew Dear, Låpsley,
                        Caribou, Who Made Who, Lawrence and many others.
                     </Typography>
                     <Typography variant={'subtitle1'}>£200/h</Typography>
                  </div>
               </div>
            </div>
            <Typography variant="h2">Choose Event</Typography>
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
                  {requestStatus ? (
                     <Button className={classes.blackBtn}>
                        Requested &#10003;
                     </Button>
                  ) : (
                     <Button
                        onClick={requestEventHandler}
                        className={classes.whiteBtn}
                     >
                        Request for this event
                     </Button>
                  )}
               </div>
            </section>
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
                  <Typography variant="overline">10:30 PM (2 hours)</Typography>
                  <Typography variant="body1" className={classes.t}>
                     Friday night techno. Need someone experienced to cover up.
                  </Typography>
               </div>
               <div className={classes.paymentInfo}>
                  <Typography variant="subtitle1">Total pay:</Typography>
                  <Typography variant="overline" className={classes.euro}>
                     £400
                  </Typography>
                  {requestStatus2 ? (
                     <Button className={classes.blackBtn}>
                        Requested &#10003;
                     </Button>
                  ) : (
                     <Button
                        onClick={requestEventHandler2}
                        className={classes.whiteBtn}
                     >
                        Request for this event
                     </Button>
                  )}
               </div>
            </section>
         </main>
         <hr />
      </div>
   )
}
