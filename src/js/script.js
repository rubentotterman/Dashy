<<<<<<< HEAD
import { signUpUser } from './auth.js';
=======
import { signUpUser } from './auth.js'
import dotenv from 'dotenv'
dotenv.config()
>>>>>>> 4895bb5e614609d90c1956952eb718fb7558e0a7
document.querySelector('form').addEventListener('submit', signUpUser)