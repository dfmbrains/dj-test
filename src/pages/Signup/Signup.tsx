import { Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { Button } from '../../components/atoms'
import { ROUTES } from '../../utils/constants/general'
import classes from './Signup.module.css'

export const Signup = () => {
   return (
      <main className={classes.mainContainer}>
         <div className={classes.h1}>
            <Typography variant="h1">Sign up</Typography>
         </div>

         <div className={classes.btnContainer}>
            <Link to={ROUTES.SIGNUPDJ}>
               <Button>I'am a DJ</Button>
            </Link>
            <Link to={ROUTES.SIGNUPBUSINESS}>
               <Button>I need a DJ</Button>
            </Link>
         </div>
      </main>
   )
}
