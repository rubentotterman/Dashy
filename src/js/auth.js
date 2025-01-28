import { supabase } from './supabaseConfig.js'; // Named import
console.log('Supabase client imported:', supabase);



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
  // Enhanced email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  // Check username availability
  const { data } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single()
  
  if (data) return { valid: false, message: 'Username taken' }
  if (password.length < 8) return { valid: false, message: 'Password too short' }
  
  // More robust email validation
  if (!emailRegex.test(email)) return { valid: false, message: 'Invalid email format' }
  
  // Additional email checks
  const [local, domain] = email.split('@');
  if (local.length > 64 || email.length > 254) return { valid: false, message: 'Email too long' }
  if (local.includes('..') || domain.includes('..')) return { valid: false, message: 'Invalid email' }
  
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
import { supabase } from './supabaseConfig.js';

export const signUp = async (username, password, email) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });


  if (data && data.session) {
    // Store the session token
    localStorage.setItem('sessionToken', data.session.access_token);
  }

  return { data, error };
};

export const validateInput = async (username, password, email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { data, error } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

  if (error && error.code !== 'PGRST116') {
    return { valid: false, message: 'Error checking username availability' };
  }

  if (data) return { valid: false, message: 'Username taken' };
  if (password.length < 8) return { valid: false, message: 'Password too short' };

  if (!emailRegex.test(email)) return { valid: false, message: 'Invalid email format' };

  const [local, domain] = email.split('@');
  if (local.length > 64 || email.length > 254) return { valid: false, message: 'Email too long' };
  if (local.includes('..') || domain.includes('..')) return { valid: false, message: 'Invalid email' };

  return { valid: true };
};

export const signUpUser = async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  const validation = await validateInput(username, password, email);
  if (!validation.valid) {
    console.error(validation.message);
    alert(validation.message);
    return;
  }

  const { error } = await signUp(username, password, email);
  if (error) {
    console.error('Signup failed:', error.message);
    alert('Signup failed: ' + error.message);
    return;
  }

  if (data && data.session) {
    alert('Signup successful! Redirecting to dashboard...');
    window.location.href = '/dashboard';
  } else {
    alert('Signup successful! Please check your email to verify your account.');
  }
};
