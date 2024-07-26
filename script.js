const container = document.getElementById('container');
const signupBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

signupBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})