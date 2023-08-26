let mainTagContainer = document.querySelector(".main-tag-name-container");
let mainTagContainerCom = document.querySelector(".main-tag-name-container-com");
let optionList = document.querySelector("#list");
let optionListCompany = document.querySelector('#list-company')
let options = document.querySelectorAll(".option");
let optionsCom = document.getElementsByClassName('option-com')

mainTagContainer.addEventListener("mouseenter", () => {
  optionList.classList.remove("hide");
});

optionList.addEventListener("mouseleave", () => {
  optionList.classList.add("hide");
});

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    // Prevent the click event from propagating to the parent container
    event.stopPropagation();

    // Hide the options list
    optionList.classList.add("hide");
  });
});

mainTagContainerCom.add('mouseenter',()=>{
    optionListCompany.classList.remove('list-company-hide')
})

optionListCompany.addEventListener('mouseleave',()=>{
    optionListCompany.classList.add('list-company-hide')
})

