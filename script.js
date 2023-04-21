
const modelContent = document.querySelector(".model-content");

const closeButton = document.querySelector(".close-button");

const openModel = document.querySelector(".open-model")

modelContent.addEventListener('click', () => {
 openModel.classList.add("showContent");
});

closeButton.addEventListener("click", () => {
 openModel.classList.remove("showContent");
});
