const modelContent = document.querySelector(".model-content");

const modelFocus = document.querySelector(".model-focus");
const closeBtn = document.querySelector(".model-focus i");

console.log(closeBtn)

const viewModelContent = () => {
 modelFocus.classList.add("show-focus");
}

const closebtnFunc = () => {
 if(modelFocus.classList.contains('show-focus')) {
  modelFocus.classList.remove('show-focus');
  modelFocus.classList.add("hide-focus");
 }

}


modelContent.addEventListener('click', viewModelContent);
closeBtn.addEventListener("click", closebtnFunc);