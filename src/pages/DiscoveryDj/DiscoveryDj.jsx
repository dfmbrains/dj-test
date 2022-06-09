import { useSelector } from 'react-redux'
import { Filter } from '../../components/organisms/Filter/Filter'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/general'
import classes from './DiscoveryDj.module.css'

export const DiscoveryDj = () => {
   const { djList } = useSelector((state) => state.dj)
   const navigate = useNavigate()

   const showDjDetailsHandler = () => {
      navigate(ROUTES.DJ_DETAILS)
   }
   return (
      <div className={classes.mainContainer}>
         <div className={classes.subHeader}>
            <h1>DJ's</h1>
            <Filter className={classes.filter} />
         </div>

         <main>
            {djList.map((djItem) => (
               <div className={classes.cardContainer} key={djItem.id} onClick={showDjDetailsHandler}>
                  <div className={classes.djInfo}>
                     <div>
                        <p className={classes.djName}>DJ Koze</p>
                        <p>London</p>
                     </div>

                     <p>£200/h</p>
                  </div>

                  <div>
                     <img src={djItem.thumbnailUrl} alt="" />
                  </div>
                  <div className={classes.action}>
                     <span className={classes.tag}>Techno</span>
                     <span className={classes.tag}>Tech-house</span>
                     <span className={classes.tag}>Minimal techno</span>
                  </div>
               </div>
            ))}
         </main>
      </div>
   )
}
