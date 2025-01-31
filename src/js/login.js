import { supabase } from './supabaseConfig.js';

document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        
        const userInput = document.getElementById('userInput').value;
        const password = document.getElementById('password').value;

        console.log('Attempting login with:', { email: userInput, password: password });

        try {
            
            console.log('Attempting to sign in with:',  { email: userInput});

            const { data, error } = await supabase.auth.signInWithPassword({
                email: userInput,
                password: password
            });


            if (error) {
                console.log('Auth Error Details:', error);
                alert("Invalid login credentials. Please try again.")
                throw error;
            }

            console.log('Sign in Successful:', data);
            window.location.href = 'dashboard.html';
            
        } catch (error) {
            console.error('Error signing in:', error.message);

            const errorDisplay = document.getElementById('error-message');
            if (errorDisplay) {
                errorDisplay.textContent = error.message;
            }
        }
    });
});