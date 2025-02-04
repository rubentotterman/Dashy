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



visitFacebookButton.addEventListener('click', () => {
    window.open('https://www.facebook.com', '_blank');
});

document.getElementById('deleteCardButton').addEventListener('click', async () => {
    document.getElementById('card').remove();
});