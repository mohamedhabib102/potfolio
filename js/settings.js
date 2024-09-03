// Mange Toggle Switch Input

let toggleButtons = document.querySelectorAll(".settings-page .toggle-switch");

// Start Work Function
toggleButtons.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("checked");
    })
})


let toggleButton = document.querySelectorAll(".profile-page .toggle-switch");

// Start Work Function
toggleButton.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("checked");
    })
})



let checkRadioBox = document.querySelectorAll(".chech-radio");
let itemsChecked = document.querySelectorAll(".items-checked");
let checkBoxes = document.querySelectorAll(".delted-control .control input");


// Add Class "checked-radio" On At Stats Checked The Elements Radios And Change Style Elements to Display is Block Or None
checkBoxes.forEach((check) => {
    check.addEventListener("change", function(e) {
        if (this.checked){
            this.classList.add("checked-radio");
            document.querySelector(e.currentTarget.dataset.show).style.display = "none";
        } else{
            this.classList.remove("checked-radio");
            document.querySelector(e.currentTarget.dataset.show).style.display = "block";
        }
    })
})

let clickRadio = document.querySelectorAll(".backup-control .date input");

clickRadio.forEach((input) => {
    input.addEventListener("click", function (){
        clickRadio.forEach((e) =>{
            e.classList.remove("click-radio")
        });
        if (input.checked){
            this.classList.add("click-radio")
        }
    })
})

// Mange Elements Servers Divs 
let elServer = document.querySelectorAll(".servers .server");


function addClassSer(){
    elServer.forEach((event) => {
        event.addEventListener("click", () => {
            elServer.forEach((ser) => {
                ser.classList.remove("select-ser");
            })
            event.classList.add("select-ser")
        })
    })
}
addClassSer(); // This Wrok Function

// Mange Section Control
let inputControl = document.querySelector(".settings-page .input-control");
let messageClose = document.querySelector(".message-close");

inputControl.addEventListener("click", () => {
    inputControl.classList.contains("checked") 
    ? (messageClose.disabled = true)  
    : (messageClose.disabled = false)
})


let inputMail = document.querySelector(".settings-page .input-maile");
let changeButton = document.querySelector(".settings-page .change-button");
let doneButton = document.querySelector(".settings-page .done-button");

doneButton.style.display = "none";

changeButton.addEventListener("click", removeDisabled);
doneButton.addEventListener("click", addDisabledDone);

// Remove Disabled On The Inout Mail And Change Button
function removeDisabled(){
    inputMail.disabled = false;
    inputMail.classList.add("remove-disabled");
    doneButton.style.display = "block";
    changeButton.style.display = "none";
}

// Add Disabled On The Inout Mail And Change Button
function addDisabledDone(){
    inputMail.disabled = true;
    inputMail.classList.remove("remove-disabled");
    doneButton.style.display = "none";
    changeButton.style.display = "block";
}



let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();





