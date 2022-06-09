import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/atoms'
import classes from './MyProfileDj.module.css'
import { ROUTES } from '../../utils/constants/general'

export const MyProfileDj = () => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate(ROUTES.DJ_BOOKINGS)
   }
   const { pathname } = useLocation()
   const uploadPhotoHandler = () => {}
   return (
      <main className={classes.mainContainer}>
         <div className={classes.groupedContainer}>
            <div className={classes.infoAction}>
               <Button onClick={navigateHandler}>Bookings</Button>
               <Button>Calendar</Button>
            </div>
            
         </div>
         <div className={classes.editProfileContainer}>
            <ul>
               <NavLink
                  to={ROUTES.EDIT_PROFILE}
                  className={({ isActive }) =>
                     isActive ? classes.isActive : classes.nonActive
                  }
               >
                  Edit profile
               </NavLink>
               <NavLink
                  to={ROUTES.ONLINE_PRESENCE}
                  className={({ isActive }) =>
                     isActive ? classes.isActive : classes.nonActive
                  }
               >
                  Online presence
               </NavLink>
               <NavLink
                  to={ROUTES.ACCOUNT_SETTINGS}
                  className={({ isActive }) =>
                     isActive ? classes.isActive : classes.nonActive
                  }
               >
                  Account settings
               </NavLink>
               <NavLink
                  to={ROUTES.PAYMENT_SETTINGS}
                  className={({ isActive }) =>
                     isActive ? classes.isActive : classes.nonActive
                  }
               >
                  Payment settings
               </NavLink>
            </ul>

            {pathname === '/my_dj_profile/edit_profile' && (
               <div className={classes.upload}>
                  <div>
                     <img src="" alt="" />
                  </div>
                  <Button
                     className={classes.uploadBtn}
                     onClick={uploadPhotoHandler}
                  >
                     Change photo
                  </Button>
               </div>
            )}
         </div>

         <Outlet />
      </main>
   )
}
