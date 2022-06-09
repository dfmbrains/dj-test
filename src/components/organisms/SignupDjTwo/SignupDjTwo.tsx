import classes from './SignupDjTwo.module.css'

import { ReactComponent as Upload } from '../../../assets/icons/upload.svg'
import { Button, Input } from '../../atoms'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/general'

export const SignupDjTwo: React.FC = () => {
   return (
      <main className={classes.mainContainer}>
         <p>
            Welcome to PHONO <span>DJ Koze</span>
         </p>
         <p>Please complete your profile to begin.</p>
         <div className={classes.uploadContainer}>
            <Upload />
            <Button className={classes.uploadBtn}>Upload photo</Button>
         </div>
         <form className={classes.formContainer}>
            <label htmlFor="">City</label>
            <Input
               style={{
                  width: '818px',
                  height: '64px',
                  border: '1px solid #FFFFFF',
                  color: '#FFFFFF',
                  fontSize: '24px',
               }}
               fullWidth={true}
            />
            <label htmlFor="">Hourly rate</label>
            <div className={classes.inputContainer}>
               <Input
                  style={{
                     width: '666px',
                     height: '64px',
                     border: '1px solid #FFFFFF',
                     color: '#FFFFFF',
                     fontSize: '24px',
                  }}
                  fullWidth={true}
               />
               <div className={classes.currency}>
                  <span>EUR</span>
               </div>
            </div>
            <Link to={ROUTES.MYDJPROFILE}>
               <Button>Complete</Button>
            </Link>
         </form>
      </main>
   )
}
