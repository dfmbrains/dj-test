import React, { FC } from 'react'
import classes from './Spiner.module.css'

export const Spinner: FC = () => {
   return (
      <div className={classes.spinner}>
         <div className={classes.ring} />
         <span>loading...</span>
      </div>
   )
}
