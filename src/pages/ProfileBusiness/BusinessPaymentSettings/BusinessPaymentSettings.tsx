import React from 'react'
import {Input} from '../../../components/atoms'
import classes from './BusinessPaymentSettings.module.css'

export const BusinessPaymentSettings = () => {
   return (
      <form className={classes.inputSection}>
         <div className={classes.inputContainer}>
            <label htmlFor="">Name on the card</label>
            <Input
               className={classes.input}
               style={{
                  border: '1px solid #FFFFFF',
               }}
            />
         </div>
         <div className={classes.inputContainer}>
            <label htmlFor="">Card number</label>
            <Input
               className={classes.input}
               style={{
                  border: '1px solid #FFFFFF',
               }}
            />
         </div>
         <div className={classes.inputContainer}>
            <label htmlFor="">CVC</label>
            <Input
               className={classes.inputBio}
               style={{
                  border: '1px solid #FFFFFF',
               }}
            />
         </div>
      </form>
   )
}
