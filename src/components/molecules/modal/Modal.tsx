import { Typography } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from '../../atoms/card/Card'
import { Button } from '../../atoms'
import classes from './Modal.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/general'

type Props = {
   children: React.ReactNode
   message: string
   onClick: () => void
}

export const Modal: React.FC<Props> = ({ children, onClick, message }) => {
   const BackDrop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
      return <div className={classes.backdrop} onClick={onClose}></div>
   }

   const ModalOverLay: React.FC<Props> = ({ onClick }) => {
      return (
         <Card className={classes.modal}>
            <div onClick={onClick}>
               <i className="ri-close-line"></i>
            </div>
            <div className={classes.content}>
               <Typography variant={'h4'} className={classes.typo}>
                  {message}
               </Typography>

               <Link to={ROUTES.LOGIN}>
                  <Button className={classes.actionBtn}>Login</Button>
               </Link>
               <div className={classes.typoContainer}>
                  <Typography variant={'subtitle2'}>
                     Don’t have an account?
                  </Typography>
                  <Link to={ROUTES.SIGNUP}>
                     <Typography variant={'subtitle1'} className={classes.link}>Sign up</Typography>
                  </Link>
               </div>
            </div>
         </Card>
      )
   }

   const elem = document.getElementById('modal-root')

   return (
      <React.Fragment>
         {ReactDOM.createPortal(<BackDrop onClose={() => {}} />, elem!)}
         {ReactDOM.createPortal(
            <ModalOverLay onClick={onClick} message={message}>
               {children}
            </ModalOverLay>,
            elem!
         )}
      </React.Fragment>
   )
}
