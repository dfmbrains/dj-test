import React, { FC } from 'react'
import { Footer } from '../../molecules'
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import { ReactComponent as BurgerMenu } from '../../../assets/icons/menu.svg'
import { Button, Input } from '../../atoms'
import classes from './DashBoardBusiness.module.css'

export const DashBoardBusiness: FC = () => {
   return (
      <div className={classes.mainContainer}>
         <header>
            <div className={classes.logoContainer}>
               <Logo />
            </div>
            <div className={classes.headerLeftContainer}>
               <ul>
                  <li>
                     <a href="/#">Find DJ</a>
                  </li>
               </ul>
               <div className={classes.burgerContainer}>
                  <div>
                     <BurgerMenu />
                  </div>
                  <div className={classes.avatarContainer}>
                     <img src="" alt="" />
                  </div>
               </div>
            </div>
         </header>
         <main>
            <div className={classes.groupedContainer}>
               <div className={classes.infoAction}>
                  <Button>Bookings</Button>
                  <Button>Calendar</Button>
               </div>
               <div className={classes.profileContainer}>
                  <p>My Profile</p>
                  <hr />
                  <p>Logout</p>
               </div>
            </div>
            <div className={classes.editProfileContainer}>
               <ul>
                  <li>
                     <a href="/#">Edit profile</a>
                  </li>
                  <li>
                     <a href="/#">Online presence</a>
                  </li>
                  <li>
                     <a href="/#">Account settings</a>
                  </li>
                  <li>
                     <a href="/#">Payment settings</a>
                  </li>
               </ul>

               <div>
                  <img src="" alt="" />
               </div>
               <Button>Change photo</Button>
            </div>

            <div className={classes.inputContainer}>
               <div>
                  <label htmlFor="">Name</label>
                  <Input
                     style={{
                        width: '818px',
                        height: '64px',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '24px',
                     }}
                  />
               </div>
               <div>
                  <label htmlFor="">City</label>
                  <Input
                     style={{
                        width: '818px',
                        height: '64px',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '24px',
                     }}
                  />
               </div>
               <div>
                  <label htmlFor="">About</label>
                  <Input
                     style={{
                        width: '818px',
                        height: '150px',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '24px',
                     }}
                  />
               </div>
               <div>
                  <label htmlFor="">Venue location</label>
                  <Input
                     style={{
                        width: '818px',
                        height: '64px',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '24px',
                     }}
                  />
               </div>
            </div>
         </main>
         <hr />
         <Footer />
      </div>
   )
}
