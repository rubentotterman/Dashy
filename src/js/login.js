import { supabase } from './supabaseConfig.js';

document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        
        const userInput = document.getElementById('userInput').value;
        const password = document.getElementById('password').value;

        console.log('Attempting to sign in with:', {
            userInput: userInput,
            passwordLength: password.Length
        });

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: userInput,
                password: password
            });

            if (error) {
                throw error;
            }

            window.location.href = 'dashboard.html';
            
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    });
});