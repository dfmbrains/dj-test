export const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
export const CALENDLY_API = 'https://calendly.com/phonolive/phone-live'
export const ROUTES = {
   LOGIN: '/login',
   SIGNUP: '/signup',
   HOME: '/',
   EVENT: '/event',
   EVENT_APPLIED: '/event_applied',
   EVENT_DETAILS: '/event_details',
   EVENT_REQUEST: '/event_request',
   SIGNUPDJ: '/signup_dj',
   SIGNUPDJTWO: '/signup_dj_two',
   SIGNUPBUSINESS: '/signup_business',
   SIGNUPBUSINESSTWO: '/signup_business_two',
   MYDJPROFILE: '/my_dj_profile',
   BUSINESS_DASHBOARD: '/business_dashboard',
   EDITPROFILE: 'edit_profile',
   ONLINEPRESENCE: 'online_presence',
   ACCOUNTSETTINGS: 'account_settings',
   PAYMENTSETTINGS: 'payment_settings',
   EDIT_PROFILE: 'edit_profile',
   ONLINE_PRESENCE: 'online_presence',
   ACCOUNT_SETTINGS: 'account_settings',
   PAYMENT_SETTINGS: 'payment_settings',
   DJ_DISCOVERY: '/dj_discovery',
   DJ_DETAILS: '/dj_details',
   REQUEST_DJ: '/request_dj',
   PAYMENT: '/payment',
   DJ_BOOKINGS: '/dj_bookings',
   BUSINESS_BOOKINGS: '/business_bookings',
   CREATE_EVENT: '/event_creation',
   MY_BUSINESS_PROFILE: '/business_profile',
   ADMIN_DASHBOARD: '/admin_dashboard',
   DJ_CALENDAR: '/dj_calendar',
   BUSINESS_CALENDAR: '/business_calendar',
}

export const HEADER_OPTIONS = [
   {
      path: ROUTES.LOGIN,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.HOME,
      headerKey: 'nav',
   },
   {
      path: ROUTES.SIGNUP,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.SIGNUPDJ,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.SIGNUPDJTWO,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.MYDJPROFILE,
      headerKey: 'findEvent',
   },
   {
      path: ROUTES.DJ_CALENDAR,
      headerKey: 'findEvent',
   },
   {
      path: '/my_dj_profile/payment_settings',
      headerKey: 'findEvent',
   },
   {
      path: '/my_dj_profile/account_settings',
      headerKey: 'findEvent',
   },
   {
      path: '/my_dj_profile/edit_profile',
      headerKey: 'findEvent',
   },
   {
      path: '/my_dj_profile/online_presence',
      headerKey: 'findEvent',
   },
   {
      path: ROUTES.SIGNUPBUSINESS,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.SIGNUPBUSINESSTWO,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.BUSINESS_DASHBOARD,
      headerKey: 'findDj',
   },
   {
      path: '/business_dashboard/edit_profile',
      headerKey: 'findDj',
   },
   {
      path: '/business_dashboard/online_presence',
      headerKey: 'findDj',
   },
   {
      path: '/business_dashboard/account_settings',
      headerKey: 'findDj',
   },
   {
      path: '/business_dashboard/payment_settings',
      headerKey: 'findDj',
   },
   {
      path: ROUTES.EVENT,
      headerKey: 'nav',
   },
   {
      path: ROUTES.EVENT_DETAILS,
      headerKey: 'nav',
   },
   {
      path: ROUTES.EVENT_APPLIED,
      headerKey: 'onlyLogo',
   },
   {
      path: ROUTES.DJ_DISCOVERY,
      headerKey: 'nav',
   },
   {
      path: ROUTES.DJ_DETAILS,
      headerKey: 'nav',
   },
   {
      path: ROUTES.REQUEST_DJ,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.BUSINESS_CALENDAR,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.PAYMENT,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.MYDJPROFILE,
      headerKey: 'findEvent',
   },
   {
      path: ROUTES.DJ_BOOKINGS,
      headerKey: 'findEvent',
   },
   {
      path: ROUTES.BUSINESS_DASHBOARD,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.BUSINESS_BOOKINGS,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.EVENT_REQUEST,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.CREATE_EVENT,
      headerKey: 'findDj',
   },
   {
      path: ROUTES.MY_BUSINESS_PROFILE,
      headerKey: 'login',
   },
]
