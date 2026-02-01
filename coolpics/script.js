const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".viewer");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
	if (e.target.tagName === "IMG") {
		const image = e.target;
		const src = image.getAttribute("src");
		const alt = image.getAttribute("alt");

		const largeSrc = src.replace("-sm", "-full");

		modalImage.setAttribute("src", largeSrc);
		modalImage.setAttribute("alt", alt);
		modal.showModal();
	}
}

closeButton.addEventListener("click", () => {
	modal.close();
});

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.close();
	}
});
