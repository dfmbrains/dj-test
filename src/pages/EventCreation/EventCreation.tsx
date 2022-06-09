import { Input, Button } from '../../components/atoms'
import classes from './EventCreation.module.css'
import { Typography } from '@mui/material'

export const EventCreation = () => {
   return (
      <main className={classes.mainContainer}>
         <Typography variant="h1">Create Event</Typography>
         <form className={classes.formContainer}>
            <div className={classes.inputsContainer}>
               <div className={classes.left}>
                  <label>Event Name</label>
                  <Input />
                  <label>Set start time</label>
                  <Input />
                  <label>Date</label>
                  <Input />
               </div>
               <div className={classes.right}>
                  <label>Address</label>
                  <Input />
                  <label>Set end time</label>
                  <Input />
                  <label>Budget</label>
                  <Input />
               </div>
            </div>
            <div className={classes.div}>
               <label className={classes.label}>Genre</label>
               <Input
                  style={{
                     width: '818px',
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.div}>
               <label className={classes.label}>Description</label>
               <Input
                  style={{
                     width: '818px',
                     border: '1px solid #FFFFFF',
                  }}
                  sx={{ input: { height: '170px' } }}
               />
            </div>

            <Button>Create</Button>
         </form>
      </main>
   )
}
