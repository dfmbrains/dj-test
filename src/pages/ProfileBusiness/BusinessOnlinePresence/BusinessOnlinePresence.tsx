import React from 'react'
import { Input } from '../../../components/atoms'
import classes from './BusinessOnlinePresence.module.css'

export const BusinessOnlinePresence = () => {
   return (
      <form className={classes.inputSection}>
         <div className={classes.inputContainer}>
            <label htmlFor="">Website</label>
            <Input
               className={classes.input}
               style={{
                  border: '1px solid #FFFFFF',
               }}
            />
         </div>
         <div className={classes.inputContainer}>
            <label htmlFor="">Instagram</label>
            <Input
               className={classes.input}
               style={{
                  border: '1px solid #FFFFFF',
               }}
            />
         </div>
      </form>
   )
}
