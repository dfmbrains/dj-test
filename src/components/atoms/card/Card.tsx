import { FC } from 'react'
import classes from './Card.module.css'

interface CardProps {
   children: React.ReactNode
   className: string
}
export const Card: FC<CardProps> = ({ children, className }) => {
   return <div className={`${classes.card} ${className}`}>{children}</div>
}
