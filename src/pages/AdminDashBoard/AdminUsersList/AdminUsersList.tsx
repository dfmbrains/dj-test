import classes from './AdminUsersList.module.css'

interface AdminUserListProps {
   userList: any
}
type item = {
   id: number
   image: string
   name: string
   location: string
   email: string
   accountType: string
}

const AdminUsersList: React.FC<AdminUserListProps> = ({ userList }) => {
   return (
      <div className={classes.userListContainer}>
         <div className={classes.userListHeader}>
            <p className={classes.title}>Name</p>
            <p className={classes.title}>Location</p>
            <p className={classes.title}>Email address</p>
            <p className={classes.title}>Account type</p>
         </div>
         <hr className={classes.line} />
         <div className={classes.userList}>
            {userList.length !== 0 &&
               userList.map((item: item) => {
                  return (
                     <div>
                        <div key={item.id} className={classes.userListItem}>
                           <img
                              className={classes.image}
                              src={item.image}
                              alt=""
                           />
                           <p className={classes.text}>{item.name}</p>
                           <p className={classes.text}>{item.location}</p>
                           <p className={classes.text}>{item.email}</p>
                           <p className={classes.text}>{item.accountType}</p>
                           <button className={classes.button}>
                              REMOVE USER
                           </button>
                        </div>
                        <hr className={classes.line} />
                     </div>
                  )
               })}
         </div>
      </div>
   )
}

export default AdminUsersList
