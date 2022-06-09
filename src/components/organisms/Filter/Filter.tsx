import React, { useState } from 'react'
import classes from './filter.module.scss'
import { Typography } from '@mui/material'
import { Button } from '../../atoms'

export const Filter = () => {
   const [filters, setFilters] = useState(false)

   const openFilterHandler = () => {
      setFilters((prevState) => !prevState)
   }
   const closeFilterHandler = () => {
      setFilters((prevState) => !prevState)
   }

   return (
      <div className={classes.filterContainer}>
         <Button onClick={openFilterHandler} className={classes.filterBtn}>
            <Typography variant={'h6'}>Filter</Typography>
         </Button>
         <div
            style={{ display: `${filters ? 'block' : 'none'}` }}
            className={classes.filterBox}
         >
            <i onClick={closeFilterHandler} className="ri-close-fill" />
            <Typography variant={'subtitle2'} className={classes.title}>
               Filters
            </Typography>
            <div className={classes.formContainer}>
               <form>
                  <label className={classes.label}>
                     <Typography variant={'subtitle2'} className={classes.type}>
                        Location
                     </Typography>
                     <input className={classes.input} type="text" />
                  </label>
                  <label className={classes.label}>
                     <Typography variant={'subtitle2'} className={classes.type}>
                        Genre
                     </Typography>
                     <input className={classes.input} type="text" />
                  </label>
                  <label className={classes.label}>
                     <Typography variant={'subtitle2'} className={classes.type}>
                        Keywords
                     </Typography>
                     <input className={classes.input} type="text" />
                  </label>
                  <div className={classes.btnBox}>
                     <Button className={classes.actionBtn}>Apply</Button>
                  </div>
               </form>
            </div>
         </div>
         <div
            onClick={(e) => setFilters(false)}
            className={classes.layout}
            style={{ display: `${filters ? 'block' : 'none'}` }}
         ></div>
      </div>
   )
}
