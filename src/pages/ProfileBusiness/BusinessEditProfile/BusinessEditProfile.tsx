import React from 'react'
import { Input } from '../../../components/atoms'
import classes from './BusinessEditProfile.module.css'

export const BusinessEditProfile = () => {
   return (
      <div className={classes.editProfileContainer}>
         <form className={classes.inputSection}>
            <div className={classes.inputContainer}>
               <label htmlFor="">Name</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">City</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">About</label>
               <Input
                  className={classes.inputBio}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
                  sx={{ input: { height: '150px' } }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">Venue location</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
         </form>
      </div>
   )
}
