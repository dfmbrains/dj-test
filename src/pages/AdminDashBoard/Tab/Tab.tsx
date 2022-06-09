interface TabProps {
  children: React.ReactNode
  tabName: string
  tabKey: string
  className: string
}
const Tab: React.FC<TabProps> = ({children, tabName, tabKey, className}) => {
  return (
      <>
        {
            tabName === tabKey && <div className={className}>{children}</div>
        }
      </>
  )
}

export default Tab