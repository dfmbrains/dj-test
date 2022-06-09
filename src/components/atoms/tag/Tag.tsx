import React from 'react'
import classes from './tag.module.scss'

interface TextProps {
   children: React.ReactNode
}

export const Tag: React.FC<TextProps> = ({ children }) => {
   return <p className={classes.type}>{children}</p>
}

export default Tag
