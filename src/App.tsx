import { Route, Routes } from 'react-router-dom'
import { theme } from './utils/helpers/typography'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import {
   EditProfile,
   OnlinePresence,
   AccountSettings,
   PaymentSettings,
} from './pages/ProfileDj'

import {
   BusinessEditProfile,
   BusinessOnlinePresence,
   BusinessAccountSettings,
   BusinessPaymentSettings,
} from './pages/ProfileBusiness'
import { BusinessDashboard } from './pages/ProfileBusiness/BusinessDashboard'
import { SignupDj } from './pages/SignupDj/SignupDj'
import { Home } from './pages/Home/Home'
import { Layout } from './layout/Layout'
import { ROUTES } from './utils/constants/general'
import { SignupBusiness } from './components/organisms/SignupBusiness/SignupBusiness'
import { SignupDjTwo } from './components/organisms/SignupDjTwo/SignupDjTwo'
import { MyProfileDj } from './pages/ProfileDj/MyProfileDj'
import { SignupBusinessTwo } from './components/organisms/SignupBusinessTwo/SignupBusinessTwo'
import { Events } from './pages/Events/Events'
import { EventDetails } from './pages/EventDetails/EventDetails'
import { Login } from './components/organisms/login/Login'
import { DiscoveryDj } from './pages/DiscoveryDj/DiscoveryDj'
import { DetailsDj } from './pages/DiscoveryDj/DetailsDJ/DetailsDj'
import { RequestDj } from './pages/RequestDj/RequestDj'
import { Payment } from './pages/RequestDj/Payment/Payment'
import { DjBookings } from './pages/Bookings/DjBookings'
import { BusinessBookings } from './pages/Bookings/BusinessBookings'
import { EventCreation } from './pages/EventCreation/EventCreation'
import { MyBusinessProfile } from './pages/MyBusinessProfile/MyBusinessProfile'
import { EventApplied } from './pages/EventApplied/EventApplied'
import { EventRequest } from './pages/EventRequests/EventRequest'
import { Signup } from './pages/Signup/Signup'
import { AdminDashBoard } from './pages/AdminDashBoard/AdminDashBoard'
import { BusinessCalendar } from './pages/Calendar/BusinessCalendar/BusinessCalendar'
import { DjCalendar } from './pages/Calendar/DjCalendar/DjCalendar'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <Routes>
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.SIGNUP} element={<Signup />} />
               <Route path={ROUTES.SIGNUPDJ} element={<SignupDj />} />
               <Route path={ROUTES.SIGNUPDJTWO} element={<SignupDjTwo />} />
               <Route path={ROUTES.EVENT} element={<Events />} />
               <Route path={ROUTES.EVENT_DETAILS} element={<EventDetails />} />
               <Route path={ROUTES.LOGIN} element={<Login />} />
               <Route path={ROUTES.DJ_DISCOVERY} element={<DiscoveryDj />} />
               <Route path={ROUTES.DJ_DETAILS} element={<DetailsDj />} />
               <Route path={ROUTES.REQUEST_DJ} element={<RequestDj />} />
               <Route path={ROUTES.PAYMENT} element={<Payment />} />
               <Route path={ROUTES.DJ_BOOKINGS} element={<DjBookings />} />
               <Route path={ROUTES.DJ_CALENDAR} element={<DjCalendar />} />
               <Route path={ROUTES.BUSINESS_CALENDAR} element={<BusinessCalendar />} />
               <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashBoard />} />
               <Route
                  path={ROUTES.BUSINESS_BOOKINGS}
                  element={<BusinessBookings />}
               />
               <Route path={ROUTES.CREATE_EVENT} element={<EventCreation />} />
               <Route
                  path={ROUTES.MY_BUSINESS_PROFILE}
                  element={<MyBusinessProfile />}
               />
               <Route path={ROUTES.EVENT_APPLIED} element={<EventApplied />} />
               <Route path={ROUTES.EVENT_REQUEST} element={<EventRequest />} />
               <Route
                  path={ROUTES.SIGNUPBUSINESS}
                  element={<SignupBusiness />}
               />

               <Route
                  path={ROUTES.SIGNUPBUSINESSTWO}
                  element={<SignupBusinessTwo />}
               />

               <Route path={ROUTES.MYDJPROFILE} element={<MyProfileDj />}>
                  <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
                  <Route
                     path={ROUTES.ONLINE_PRESENCE}
                     element={<OnlinePresence />}
                  />
                  <Route
                     path={ROUTES.ACCOUNT_SETTINGS}
                     element={<AccountSettings />}
                  />
                  <Route
                     path={ROUTES.PAYMENT_SETTINGS}
                     element={<PaymentSettings />}
                  />
               </Route>

               <Route
                  path={ROUTES.BUSINESS_DASHBOARD}
                  element={<BusinessDashboard />}
               >
                  <Route
                     path={ROUTES.EDITPROFILE}
                     element={<BusinessEditProfile />}
                  />
                  <Route
                     path={ROUTES.ONLINEPRESENCE}
                     element={<BusinessOnlinePresence />}
                  />
                  <Route
                     path={ROUTES.ACCOUNTSETTINGS}
                     element={<BusinessAccountSettings />}
                  />
                  <Route
                     path={ROUTES.PAYMENTSETTINGS}
                     element={<BusinessPaymentSettings />}
                  />
               </Route>
            </Routes>
         </Layout>
      </ThemeProvider>
   )
}

export default App
