

window.addEventListener('scroll', function(event) {
    if (window.scrollY > 200) {
        document.body.classList.add('sticky_nav')
    } else {
        document.body.classList.remove('sticky_nav')
    }
})