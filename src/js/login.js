import { supabase } from './supabaseConfig.js';

const signinForm = document.getElementById('signinForm');

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userInput = document.getElementById('userInput').value; // This can be either email or username
    const password = document.getElementById('password').value;

    try {
        // First try signing in with email
        let { data, error } = await supabase.auth.signInWithPassword({
            email: userInput,
            password: password
        });

        // If email login fails, try to find the user by username
        if (error) {
            // Query the profiles table to get email by username
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('email')
                .eq('username', userInput)
                .single();

            if (profileData) {
                // Try login with found email
                ({ data, error } = await supabase.auth.signInWithPassword({
                    email: profileData.email,
                    password: password
                }));
            }
        }

        if (error) {
            throw error;
        }

        // If login successful, redirect to dashboard
        window.location.href = 'dashboard.html';
        
    } catch (error) {
        console.error('Error signing in:', error.message);
    }
});