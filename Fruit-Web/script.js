let nav = document.querySelector('.navbar')
window.onscroll = function () {
	if (document.documentElement.scrollTop > 50) {
		nav.classList.add('header-scrolled')
	}
	else {
		nav.classList.remove('header-scrolled')

	}
}
let navbar = document.querySelectorAll('.nav-link')
let collapse = document.querySelector('.navbar-collapse')
navbar.forEach(e => {
	e.addEventListener('click', () => {
		collapse.classList.remove('show')
	})
});