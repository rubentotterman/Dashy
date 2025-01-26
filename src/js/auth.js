import { supabase } from '../lib/supabaseConfig.js'

export const signUp = async (username, password, email) => {
 const { data, error } = await supabase.auth.signUp({
   email,
   password,
   options: {
     data: { username }
   }
 })
 return { data, error }
}

export const validateInput = async (username, password, email) => {
 // Check username availability
 const { data } = await supabase
   .from('profiles')
   .select('username')
   .eq('username', username)
   .single()
 
 if (data) return { valid: false, message: 'Username taken' }
 if (password.length < 8) return { valid: false, message: 'Password too short' }
 if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return { valid: false, message: 'Invalid email' }
 
 return { valid: true }
}

export const signUpUser = async (e) => {
 e.preventDefault()
 
 const username = document.getElementById('username').value
 const password = document.getElementById('password').value
 const email = document.getElementById('email').value

 const validation = await validateInput(username, password, email)
 if (!validation.valid) {
   console.error(validation.message)
   return
 }

 const { error } = await signUp(username, password, email)
 if (error) {
   console.error('Signup failed:', error.message)
   return
 }

 window.location.href = '/dashboard' // Redirect after success
}