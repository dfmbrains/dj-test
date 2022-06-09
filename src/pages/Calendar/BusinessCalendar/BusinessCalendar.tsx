import { Button } from '../../../components/atoms'
import { InlineWidget } from 'react-calendly'
import classes from './BusinessCalendar.module.css'
import { CALENDLY_API } from '../../../utils/constants/general'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/general'

export const BusinessCalendar = () => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate(ROUTES.BUSINESS_BOOKINGS)
   }
   return (
      <div className={classes.mainContainer}>
         <div className={classes.btnContainer}>
            <Button className={classes.bookingBtn} onClick={navigateHandler}>
               Bookings
            </Button>
            <Button className={classes.btn}>Calendar</Button>
         </div>
         <InlineWidget
            url={CALENDLY_API}
            pageSettings={{
               backgroundColor: 'ffffff',
               hideEventTypeDetails: false,
               hideLandingPageDetails: true,
               primaryColor: '00a2ff',
               textColor: '4d5055',
            }}
         />
      </div>
   )
}
