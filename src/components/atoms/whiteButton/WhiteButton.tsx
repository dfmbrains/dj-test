import React from 'react'
import { Button, Typography } from '@mui/material'
import styles from './whiteButton.module.scss'

interface WhiteButtonProps {
   text: string
   onClick: () => void
}

export const WhiteButton: React.FC<WhiteButtonProps> = ({ text, onClick }) => {
   return (
      <Button className={styles.submit} variant={'contained'} onClick={onClick}>
         <Typography variant={'overline'}>{text}</Typography>
      </Button>
   )
}

export default WhiteButton
