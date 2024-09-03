// Import Function Show Profile From "main.js"
import { showProfileContent } from "./main.js";

// Mange Button Profil
let btnProfile = Array.from(document.querySelectorAll(".btn-profile"));

btnProfile.forEach((event) => {
    event.addEventListener("click", () => {
        showProfileContent()
    })
})

// Mange Button At Event Click It Work Remove Element Father 
let btnRemove = Array.from(document.querySelectorAll(".btn-remove"));
let frinedParent = Array.from(document.querySelectorAll(".frined"));
let buttonRest = document.querySelector(".rest-frindes");
function removeButton(btn){
    btn.forEach((button) => {
        button.addEventListener("click",  () => {
            let parent = button.closest(".frined"); // closest ancestor
            if (parent){
                // Remove Element with index
                parent.classList.add("components-none");
                let index = frinedParent.indexOf(parent);
                // Get Item After Delete It
                let elementLocalS = JSON.parse(localStorage.getItem("removeElement")) || [];
                // Add Index To "elementLocalS"
                elementLocalS.push(index);
                // Set "elementLocalS" element
                localStorage.setItem("removeElement", JSON.stringify(elementLocalS));
            }
        })
    })
}
removeButton(btnRemove)

buttonRest.onclick = function () {
    frinedParent.forEach((el) => {
        el.classList.remove("components-none");
    })
    localStorage.removeItem("removeElement");
}

window.addEventListener("DOMContentLoaded", () => {
    let elementLocal = JSON.parse(localStorage.getItem("removeElement")) || [];
    if (Array.isArray(elementLocal)){
        elementLocal.forEach((index) => {
            if (frinedParent[index]){
                frinedParent[index].classList.add("components-none");
            }
        });
    }
});
