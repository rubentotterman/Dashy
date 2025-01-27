import { signUpUser } from './auth.js'
import dotenv from 'dotenv'
dotenv.config()
document.querySelector('form').addEventListener('submit', signUpUser)