import { VisaLogo, Avatar } from '../../../assets/icons'
import { Button } from '../../../components/atoms'
import { useNavigate } from 'react-router-dom'
import classes from './Payment.module.css'
import { Typography } from '@mui/material'
import { ROUTES } from '../../../utils/constants/general'

export const Payment = () => {
   const navigate = useNavigate()
   const paymentHandler = () => {
      navigate(ROUTES.REQUEST_DJ)
   }
   return (
      <main className={classes.mainContainer}>
         <Typography variant="h1">Confirm and pay</Typography>
         <div className={classes.mainContent}>
            <div className={classes.leftContent}>
               <Typography variant="subtitle1">Pay with</Typography>
               <div className={classes.visaSection}>
                  <VisaLogo />
                  <Typography variant="overline">Credit card</Typography>
                  <Typography variant="overline">••••9257</Typography>
                  <select></select>
               </div>
               <Typography variant="subtitle1">Cancellation policy</Typography>
               <div className={classes.cancellationContext}>
                  <Typography variant="overline">
                     Cancel up to 7 days and get a full refund ( minus service
                     fees). Cancel after 7 days and get 50% refund.
                  </Typography>
                  <hr />
                  <Typography variant="overline">
                     I agree to the Terms and Conditions and Cancellation
                     policy. I also agree to pay the total amount shown which
                     includes Service Fees.
                  </Typography>
               </div>
               <Button className={classes.actionBtn} onClick={paymentHandler}>
                  Confirm and pay
               </Button>
            </div>
            <div className={classes.overallInfo}>
               <div className={classes.djInfo}>
                  <img src={Avatar} alt="avatar" />
                  <div>
                     <Typography variant="h5">DJ Koze</Typography>
                     <Typography variant="overline">London</Typography>
                     <Typography variant="overline">£200/h</Typography>
                  </div>
               </div>
               <hr />
               <div className={classes.eventInfo}>
                  <Typography variant="h5">Event name</Typography>
                  <Typography variant="overline">Studio 338, London</Typography>
                  <Typography variant="overline">
                     Saturday 25th June 2022{' '}
                  </Typography>
                  <Typography variant="overline">10:30 PM (5 hours)</Typography>
                  <hr />
               </div>
               <div className={classes.paymentInfo}>
                  <Typography variant="h5">Total pay</Typography>
                  <Typography variant="overline">£1 000</Typography>
               </div>
               <Typography variant="body1">£1 000</Typography>
            </div>
         </div>
      </main>
   )
}
