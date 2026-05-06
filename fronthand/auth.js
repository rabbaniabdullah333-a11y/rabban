// .RABBANI. Auth Logic
// Provides basic session management

const Auth = {
    isLoggedIn: () => {
        return localStorage.getItem('rabbani_logged_in') === 'true';
    },
    
    login: () => {
        localStorage.setItem('rabbani_logged_in', 'true');
    },
    
    logout: () => {
        localStorage.removeItem('rabbani_logged_in');
        window.location.reload();
    }
};

// Check if user is logged in on load
document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.querySelector('.fa-user');
    if (Auth.isLoggedIn()) {
        if (userIcon) userIcon.style.color = '#00d2ff';
    }
});
