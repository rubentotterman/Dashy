import { supabase } from './supabaseConfig.js';

const resetPassword = async (email) => {
    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/reset-password.html'  // Make sure this page exists
        });

        if (error) {
            throw error;
        }

        alert('Check your email for the password reset link!');
        
    } catch (error) {
        console.error('Reset password error:', error.message);
        alert('Error sending reset email: ' + error.message);
    }
};

// Add event listener to your reset password form/button
const resetForm = document.getElementById('resetForm');  // Create this form in your HTML
resetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    await resetPassword(email);
});