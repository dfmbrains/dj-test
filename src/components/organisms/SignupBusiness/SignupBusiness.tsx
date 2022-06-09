import React, { useState, FC } from 'react'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { Button, Input } from '../../atoms/index'
import classes from './SignupBusiness.module.css'
import { VisibilityOff, VisibilityOn } from '../../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/general'

export const SignupBusiness: FC = () => {
   const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)

   const navigate = useNavigate()

   const handleClickShowPassword = () => {
      setPasswordVisibility((prevState) => !prevState)
   }
   const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
      useState<boolean>(false)

   const handleClickShowConfirmPassword = () => {
      setConfirmPasswordVisibility((prevState) => !prevState)
   }

   const submitHandler = () => {
      navigate(ROUTES.SIGNUPBUSINESSTWO)
   }

   const validationSchema = yup.object({
      userName: yup.string().required('Name is required'),
      userLastName: yup.string().required('Surname is required'),
      businessName: yup.string().required('DJ name is required'),
      email: yup
         .string()
         .email('Enter a valid email')
         .required('* Email is required *'),
      password: yup
         .string()
         .min(8, 'Password should be of minimum 8 characters length')
         .required('Password is required'),
      confirmPassword: yup
         .string()
         .when('password', {
            is: (val: string) => !!(val && val.length > 0),
            then: yup
               .string()
               .oneOf(
                  [yup.ref('password')],
                  'Both password need to be the same'
               ),
         })
         .required('Confirm your password'),
   })

   interface FormProps {
      userName?: string
      userLastName?: string
      businessName?: string
      email?: string
      password?: string
      confirmPassword?: string
   }
   const formik: FormikProps<FormProps> = useFormik<FormProps>({
      initialValues: {
         userName: '',
         userLastName: '',
         businessName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      validationSchema,
      onSubmit: submitHandler,
   })

   const errorMessage = () => {
      const errorValidation =
         (formik.touched.email && formik.errors.email) ||
         (formik.touched.password && formik.errors.password) ||
         (formik.touched.confirmPassword && formik.errors.confirmPassword)
      return errorValidation
   }

   return (
      <main className={classes.mainContainer}>
         <h1>Sign up</h1>
         <div className={classes.dj}>
            <Button>I&#39;m a DJ</Button>
            <Link to={ROUTES.DJ_DISCOVERY}>
               <Button>I need a DJ</Button>
            </Link>
         </div>
         <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
            <div className={classes.inputsContainer}>
               <div className={classes.left}>
                  <label htmlFor="userName">UserName</label>
                  <Input
                     type="text"
                     id="userName"
                     value={formik.values.userName}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.userName &&
                        Boolean(formik.errors.userName)
                     }
                  />
                  <label htmlFor="businessName">Business Name</label>
                  <Input
                     type="text"
                     id="businessName"
                     value={formik.values.businessName}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.businessName &&
                        Boolean(formik.errors.businessName)
                     }
                  />
                  <label htmlFor="password">Password</label>
                  <Input
                     style={{
                        width: '388px',
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        fontSize: '24px',
                     }}
                     sx={{ input: { color: '#FFFFFF', fontSize: '24px' } }}
                     type={passwordVisibility ? 'text' : 'password'}
                     id="password"
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                     }
                     InputProps={{
                        endAdornment: (
                           <button
                              className={classes.btn}
                              type="button"
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
               </div>
               <div className={classes.right}>
                  <label htmlFor="userLastName">Surname</label>
                  <Input
                     type="text"
                     id="userLastName"
                     value={formik.values.userLastName}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.userLastName &&
                        Boolean(formik.errors.userLastName)
                     }
                  />
                  <label htmlFor="email">Email Address</label>
                  <Input
                     type="text"
                     id="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.email && Boolean(formik.errors.email)
                     }
                  />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <Input
                     type={confirmPasswordVisibility ? 'text' : 'password'}
                     id="confirmPassword"
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                     }
                     InputProps={{
                        endAdornment: (
                           <button
                              className={classes.btn}
                              type="button"
                              onClick={handleClickShowConfirmPassword}
                           >
                              {confirmPasswordVisibility ? (
                                 <VisibilityOn />
                              ) : (
                                 <VisibilityOff />
                              )}
                           </button>
                        ),
                     }}
                  />
               </div>
            </div>

            <p className={classes.errorMsg}>{errorMessage()}</p>
            <div>
               <Button type="submit" className={classes.actionBtn} onClick={submitHandler}>
                  Sign up
               </Button>
            </div>
         </form>

         <span className={classes.span}>
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className={classes.link}>
               Log in
            </Link>
         </span>
      </main>
   )
}
