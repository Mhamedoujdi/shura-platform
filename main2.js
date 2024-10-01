// Switch between login and signup forms
document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
});
