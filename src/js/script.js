const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)


document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    document.getElementById('message').textContent = 'Signup successful!'
    // Redirect or update UI as needed
    
  } catch (error) {
    document.getElementById('message').textContent = error.message
  }
})