import React from 'react'
import { Input } from '../../../components/atoms'
import classes from './AccountSettings.module.css'

export const AccountSettings = () => {
  return (
    <form className={classes.inputSection}>
    <div className={classes.inputContainer}>
       <label htmlFor="">Email address</label>
       <Input
          className={classes.input}
          style={{
             border: '1px solid #FFFFFF',
          }}
       />
    </div>
    <div className={classes.inputContainer}>
       <label htmlFor="">Old password</label>
       <Input
          className={classes.input}
          style={{
             border: '1px solid #FFFFFF',
          }}
       />
    </div>
    <div className={classes.inputContainer}>
       <label htmlFor="">New password</label>
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
