import React, { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

type InputProps = TextFieldProps & {}
export const Input: FC<InputProps> = ({
   placeholder,
   children,
   classes,
   fullWidth,
   onChange,
   ...other
}) => {
   return (
      <TextField
         style={{
            width: '388px',
            // height: '64px',
            border: '1px solid #FFFFFF',
            // color: '#FFFFFF',
            // fontSize: '24px',
         }}
         sx={{ input: { color: '#FFFFFF', fontSize: '24px'} }}
         placeholder={placeholder}
         fullWidth={fullWidth}
         classes={classes}
         onChange={onChange}
         {...other}
      >
         {children}
      </TextField>
   )
}
