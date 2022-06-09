import { useState, FC } from 'react'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { Button, Input } from '../../atoms/index'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import { ROUTES } from '../../../utils/constants/general'
import { VisibilityOff, VisibilityOn } from '../../../assets/icons'

export const Login: FC = () => {
   const [passwordVisibility, setPasswordVisibility] = useState(false)

   const handleClickShowPassword = () => {
      setPasswordVisibility((prevState) => !prevState)
   }

   const submitHandler = () => {}

   const validationSchema = yup.object({
      email: yup
         .string()
         .email('Enter a valid email')
         .required('* Email is required *'),
      password: yup
         .string()
         .min(8, 'Password should be of minimum 8 characters length')
         .required('Password is required'),
   })

   interface FormProps {
      email?: string
      password?: string
   }
   const formik: FormikProps<FormProps> = useFormik<FormProps>({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema,
      onSubmit: submitHandler,
   })

   const errorMessage = () => {
      const errorValidation =
         (formik.touched.email && formik.errors.email) ||
         (formik.touched.password && formik.errors.password)
      return errorValidation
   }

   return (
      <main className={classes.mainContainer}>
         <div className={classes.formContainer}>
            <form onSubmit={formik.handleSubmit}>
               <label htmlFor="email">Email Address</label>
               <Input
                  style={{
                     width: '670px',
                     border: '1px solid #FFFFFF',
                     color: '#FFFFFF',
                     fontSize: '24px',
                  }}
                  type="text"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
               />
               <label htmlFor="password">Password</label>
               <Input
                  style={{
                     width: '670px',
                     border: '1px solid #FFFFFF',
                     color: '#FFFFFF',
                     fontSize: '24px',
                  }}
                  type={passwordVisibility ? 'text' : 'password'}
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.password && Boolean(formik.errors.password)
                  }
                  InputProps={{
                     endAdornment: (
                        <button
                           type="button"
                           className={classes.btn}
                           onClick={handleClickShowPassword}
                        >
                           {passwordVisibility ? (
                              <VisibilityOn />
                           ) : (
                              <VisibilityOff />
                           )}
                        </button>
                     ),
                  }}
               />

               <p>{errorMessage()}</p>
               <Button type="submit" className={classes.actionBtn}>
                  Login
               </Button>

               <Link to="/#" className={classes.link}>Forgot Password?</Link>
            </form>
            <div className={classes.newUSer}>
               <span>New user?</span>
               <Link to={ROUTES.SIGNUP} className={classes.linkBold}>Sign up</Link>
            </div>
         </div>
      </main>
   )
}
