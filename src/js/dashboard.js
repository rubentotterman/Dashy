import { supabase } from './supabaseConfig.js'


const signoutButton = document.getElementById('signoutButton');

signoutButton.addEventListener('click', async () => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        //Redirect
        window.location.href = 'login.html'
    } catch (error) {
        console.error('Error signing out:', error.message);
    }
});