const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

fetch('https://0d7l28rs.api.sanity.io/v1/data/query/production?query=*[_type == "category"]')
    .then(response => response.json())
    .then(data => {
        document.getElementById('web-desc').innerText = data.result[0].description;
        document.getElementById('game-desc').innerText = data.result[1].description;
        document.getElementById('work-desc').innerText = data.result[2].description;
    });