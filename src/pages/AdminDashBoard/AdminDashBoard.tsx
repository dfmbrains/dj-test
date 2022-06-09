import { useState } from 'react'
import AdminEventsList from './AdminEventsList/AdminEventsList'
import AdminProfileInformation from './AdminProfileInformation/AdminProfileInformation'
import AdminUsersList from './AdminUsersList/AdminUsersList'
import Tab from './Tab/Tab'
import Tabs from './Tabs/Tabs'
import classes from './AdminDashBoard.module.css'
import someImage from '../../assets/images/someImage.svg'

export const AdminDashBoard = () => {
  const [tabKey, setTabKey] = useState('Users')
  const tabs = [
    {
      tabName: 'Users'
    },
    {
      tabName: 'Events'
    }
  ]

  const userList = [
    {
      id:1,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:2,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:1,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:2,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:1,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:2,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:1,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:2,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:1,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    },
    {
      id:2,
      image: someImage,
      name: 'Dj koze',
      location: 'London',
      email: 'dj-koze@gmail.com',
      accountType: 'Dj'
    }
  ]

  const eventsList = [
    {
      id:1,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },     {
      id:2,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },
    {
      id:3,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },     {
      id:4,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },
    {
      id:5,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },     {
      id:6,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },
    {
      id:7,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    },     {
      id:8,
      name: 'Friday night techno',
      location: 'London',
      postedBy: 'Studion 338',
      date:'22/07/2022'
    }
  ]
  return (
    <div className={classes.profileContainer}>
      <AdminProfileInformation image={someImage} totalEvents={23} totalUsers={25}/>
      <Tabs tabKey={tabKey} width={300} tabs={tabs} onChangeTabKey={setTabKey}/>
      <Tab tabKey={tabKey} tabName="Users" className={classes.users}><AdminUsersList userList={userList}/></Tab>
      <Tab tabKey={tabKey} tabName="Events" className={classes.events}><AdminEventsList eventsList={eventsList}/></Tab>
    </div>
  )
}

