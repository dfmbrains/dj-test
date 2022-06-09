import classes from './AdminEventsList.module.css'


interface AdminEventListProps {
  eventsList: any
}
type item = {
  id: number
  postedBy: string
  name: string
  location: string
  date: string
 
}

const AdminEventsList: React.FC<AdminEventListProps> = ({eventsList}) => {
  return (
    <div className={classes.userListContainer}>
      <div className={classes.userListHeader}>
        <p className={classes.title}>Name</p>
        <p className={classes.title}>Location</p>
        <p className={classes.title}>Posted By</p>
        <p className={classes.title}>Date</p>
      </div>
      <hr className={classes.line}/>
      <div className={classes.userList}>
        {
          eventsList.length !== 0 && eventsList.map((item: item)=> {
            return <div>
              <div key={item.id} className={classes.userListItem}>
                <p className={classes.text}>{item.name}</p>
                <p className={classes.text}>{item.location}</p>
                <p className={classes.text}>{item.postedBy}</p>
                <p className={classes.text}>{item.date}</p>
                <button className={classes.button}>REMOVE EVENT</button>
              </div>
              <hr className={classes.line}/>
            </div> 
          })
        }
      </div>
    </div>
  )
}

export default AdminEventsList