import classes from './AdminProfileInformation.module.css'


interface AdminProfileInformationProps {
  image:string
  totalEvents: number
  totalUsers: number
}
const AdminProfileInformation: React.FC<AdminProfileInformationProps> = ({image,totalEvents,totalUsers}) => {
  return (
    <div className={classes.informationContainer}>
      <div className={classes.avatar}>
        <img className={classes.image} src={image} alt=""/>
        <p className={classes.text}>Admin</p>
      </div>
      <div>
        <p className={classes.text}>Total users</p>
        <p className={classes.total}> {totalEvents}</p>
      </div>
      <div>
        <p className={classes.text}>Total events</p>
        <p className={classes.total}> {totalUsers}</p>
      </div>
    </div>
  )
}

export default AdminProfileInformation