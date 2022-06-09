import classes from './Tabs.module.css'

const Tabs = ({onChangeTabKey, tabs, tabKey, width}) => {
  return (
    <div style={{width: `${width}px`}} className={classes.tabsContainer}>
      {
        tabs.length !== 0 && tabs.map((item)=> {
          console.log(item)
          return <p 
          className={tabKey === item.tabName? classes.activeTab : classes.tab} 
          onClick={()=> onChangeTabKey(item.tabName)} 
          key={item.tabName}>{item.tabName}
          </p>
        })
      }
    </div>
  )
}

export default Tabs