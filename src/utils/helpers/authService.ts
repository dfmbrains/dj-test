import axios from 'axios'
import { API_URL } from '../constants/general'

const signUpRequestDj = (signupData: any) => {
    return axios.post(`${API_URL}`, signupData)
}

const signUpRequestBusiness = (signupData: any) => {
    return axios.post(`${API_URL}`, signupData)
}

const loginRequestDj = (loginData: any) => {
    return axios.post(`${API_URL}`, loginData)
}
const loginRequestBusiness = (loginData: any) => {
    return axios.post(`${API_URL}`, loginData)
}

export const authService = {signUpRequestBusiness, signUpRequestDj, loginRequestDj, loginRequestBusiness}