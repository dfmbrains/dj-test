import { useState } from 'react'
import { Modal } from '../../../components/molecules'
import { Card, Button, Tag } from '../../../components/atoms'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { InstaLogo, CloudLogo } from '../../../assets/icons'
import classes from './Details.module.css'
import { ROUTES } from '../../../utils/constants/general'

export const DetailsDj = () => {
   const [showModal, setShowModal] = useState(false)

   const navigate = useNavigate()

   const requestDjHandler = () => {
      setShowModal((prevState) => !prevState)
      // navigate(ROUTES.REQUEST_DJ)
   }

   const closeModalHandler = () => {
      setShowModal((prevState) => !prevState)
   }

   return (
      <main className={classes.mainContainer}>
         {showModal && (
            <Modal
               onClick={closeModalHandler}
               message="You need to be logged in to request DJ's"
            >
               <Button>Login</Button>
            </Modal>
         )}
         <div className={classes.djInfo}>
            <div className={classes.grouppedContainer}>
               <Typography variant={'h1'}>DJ Koze</Typography>
               <div className={classes.action}>
                  <Tag>Techno</Tag>
                  <Tag>Tech-house</Tag>
                  <Tag>Minimal techno</Tag>
               </div>
            </div>

            <div className={classes.addInfo}>
               <Typography variant={'subtitle1'}>London</Typography>
               <div className={classes.socialIcons}>
                  <InstaLogo />
                  <CloudLogo />
               </div>
            </div>
            <Card className={classes.imgContainer}>image</Card>
            <Typography variant="h2" className={classes.p}>Hourly rate</Typography>
            <p className={classes.p}>£200</p>
            <Button className={classes.actionBtn} onClick={requestDjHandler}>
               Request
            </Button>
         </div>
         <div className={classes.mainContent}>
            <div>
               <div>
                  <Typography variant={'h2'} className={classes.p}>Bio</Typography>
                  <p className={classes.p}>
                     Stefan Kozalla aka DJ Koze lives and works in Hamburg and
                     Cadaqués. His Profession: DJ, Musician (International Pony,
                     Adolf Noise) and Remixer for many, including Gorillaz,
                     Moderat, Matthew Dear, Låpsley, Caribou, Who Made Who,
                     Lawrence and many others.
                  </p>
                  <Typography variant={'h2'} className={classes.p}>Sounds</Typography>
                  <div className={classes.sounds}></div>
               </div>
               <div></div>
            </div>
         </div>
      </main>
   )
}
