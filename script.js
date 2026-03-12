const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const navbar = document.querySelector('.navbar');

if (menuButton && navMenu) {
	menuButton.addEventListener('click', () => {
		const expanded = menuButton.getAttribute('aria-expanded') === 'true';
		menuButton.setAttribute('aria-expanded', String(!expanded));
		navMenu.classList.toggle('open');
	});
}

function scrollToSection(targetId) {
	const section = document.querySelector(targetId);
	if (!section || !navbar) {
		return;
	}

	const offset = navbar.offsetHeight + 8;
	const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

	window.scrollTo({
		top,
		behavior: 'smooth'
	});
}

navLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		const targetId = link.getAttribute('href');
		if (!targetId || !targetId.startsWith('#')) {
			return;
		}

		event.preventDefault();
		scrollToSection(targetId);

		if (navMenu && navMenu.classList.contains('open')) {
			navMenu.classList.remove('open');
			menuButton?.setAttribute('aria-expanded', 'false');
		}
	});
});

const interestForm = document.querySelector('#interest-form');
const formStatus = document.querySelector('#form-status');

if (interestForm && formStatus) {
	interestForm.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!interestForm.checkValidity()) {
			formStatus.textContent = 'Please fill all required fields correctly.';
			formStatus.style.color = '#b00020';
			return;
		}

		formStatus.textContent = 'Thank you. Your interest has been registered.';
		formStatus.style.color = '#005a32';
		interestForm.reset();
	});
}