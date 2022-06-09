import { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import { Button } from '../../components/atoms/index'
import { ROUTES } from '../../utils/constants/general'

export const Home: FC = () => {
   return (
      <div className={classes.content}>
         <h1>The easiest way to manage bookings</h1>
         <p>
            PHONO matches DJ bookings with the right talents based on
            preferences, genre, location, pay and other relevant attributes.
         </p>
         <div>
            <Link to={ROUTES.EVENT}>
               <Button>I&#39;m a DJ</Button>
            </Link>
            <Link to={ROUTES.DJ_DISCOVERY}>
               <Button>I need a DJ</Button>
            </Link>
         </div>
      </div>
   )
}
