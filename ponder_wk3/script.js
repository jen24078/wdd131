const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
	menuButton.classList.toggle("change");

	const navLinks = nav.querySelectorAll("a");
	navLinks.forEach((link) => {
		if (link.style.display === "block") {
			link.style.display = "none";
		} else {
			link.style.display = "block";
		}
	});
});
