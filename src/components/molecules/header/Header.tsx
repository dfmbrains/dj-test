import React, { FC, useState } from 'react'
import classes from './header.module.scss'
import { BurgerMenu, Logo } from '../../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ROUTES } from '../../../utils/constants/general'
import { findDj } from '../../../store/djSlice'
import { useAppDispatch } from '../../../store'
import { HEADER_OPTIONS } from '../../../utils/constants/general'

export const Header: FC = () => {
   const dispatch = useAppDispatch()
   const [showProfileMenu, setProfileMenu] = useState(false)

   const findDjHandler = () => {
      dispatch(findDj())
   }

   const toggleProfileMenu = () => {
      console.log('good')
      setProfileMenu((prevState) => !prevState)
   }

   const { pathname } = useLocation()

   const foundPath = HEADER_OPTIONS.find((item) => item.path === pathname)
   return (
      <header className={classes.header}>
         <Logo />
         <div className={classes.container}>
            {foundPath?.headerKey === 'findDj' && (
               <div className={classes.headerLeft}>
                  <Typography variant="h6">Find Dj</Typography>

                  <div className={classes.groupedContainer}>
                     <div className={classes.menuContainer}>
                        <BurgerMenu onClick={toggleProfileMenu} />
                        <div className={classes.avatar}></div>
                     </div>
                     {showProfileMenu && (
                        <div className={classes.profileContainer}>
                           <Link to={ROUTES.MY_BUSINESS_PROFILE}>My Profile</Link>
                           <hr />
                           <Link to={ROUTES.HOME}>Logout</Link>
                        </div>
                     )}
                  </div>
               </div>
            )}
            {foundPath?.headerKey === 'login' && (
               <div>
                  <Typography variant="h6">Login</Typography>
               </div>
            )}
            {foundPath?.headerKey === 'findEvent' && (
               <div className={classes.headerLeft}>
                  <Typography variant="h6" className={classes.h6}>
                     Find Event
                  </Typography>

                  <div className={classes.groupedContainer}>
                     <div className={classes.menuContainer}>
                        <BurgerMenu onClick={toggleProfileMenu} />
                        <div className={classes.avatar}></div>
                     </div>
                     {showProfileMenu && (
                        <div className={classes.profileContainer}>
                           <Link to={ROUTES.MYDJPROFILE}>My Profile</Link>
                           <hr />
                           <Link to={ROUTES.HOME}>Logout</Link>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {foundPath?.headerKey === 'nav' && (
               <ul className={classes.menu}>
                  <li>
                     <Typography
                        color={'white'}
                        variant={'h6'}
                        onClick={findDjHandler}
                     >
                        Find DJ
                     </Typography>
                  </li>
                  <li>
                     <Link to={ROUTES.EVENT}>
                        <Typography color={'white'} variant={'h6'}>
                           Find Event
                        </Typography>
                     </Link>
                  </li>
                  <li>
                     <Link to={ROUTES.LOGIN}>
                        <Typography color={'white'} variant={'h6'}>
                           Login
                        </Typography>
                     </Link>
                  </li>
               </ul>
            )}
         </div>
      </header>
   )
}

export default Header
