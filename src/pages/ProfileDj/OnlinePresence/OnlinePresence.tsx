import React from 'react'
import { Input } from '../../../components/atoms'
import classes from './OnlinePresence.module.css'

export const OnlinePresence = () => {
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
       <label htmlFor="">Soundcloud</label>
       <Input
          className={classes.input}
          style={{
             border: '1px solid #FFFFFF',
          }}
       />
    </div>
    <div className={classes.inputContainer}>
       <label htmlFor="">Music sample</label>
       <Input
          className={classes.inputBio}
          style={{
             border: '1px solid #FFFFFF',
          }}
       />
    </div>
    <div className={classes.inputContainer}>
       <label htmlFor="">Spotify</label>
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
