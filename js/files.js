let Upload = document.getElementById("upload-btn");
let uploadPupop = document.querySelector(".pupop-upload");
let icon = document.querySelector(".pupop-upload .icon")
// show-pupop
Upload.onclick = () => {
    uploadPupop.classList.add("show-pupop");
}
icon.onclick = () => {
    uploadPupop.classList.remove("show-pupop");
}

let buttonImage = document.getElementById("upload");
let current_image = document.querySelector(".pupop-upload .image-control .curent-image");


function change_image(change) {
    change.onchange = function() {
        let file = change.files[0];
        let reader = new FileReader();
        reader.onload = function (e){
            current_image.src = e.target.result;
        }
        reader.readAsDataURL(file);
    };
}
change_image(buttonImage);

let buttonSubmit = document.querySelector(".pupop-upload .content button");
let fileName = document.querySelector(".pupop-upload .content .filename");
let userName = document.querySelector(".pupop-upload .content .userName");
let form = document.querySelector(".pupop-upload .content");
let inputs = Array.from(document.querySelectorAll(".pupop-upload .content input"));
let fileContent = document.querySelector(".files-page .fill-content");

form.onsubmit = (e) => {
    e.preventDefault();

    // Div File
    let divFile = document.createElement("div");
    divFile.className = "file bg-white rad-6 p-10 position-relative";

    // Icons
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-download p-absolute down";
    divFile.appendChild(icon);

    let iconX = document.createElement("i");
    iconX.className = "fa-solid fa-circle-xmark remove";
    divFile.appendChild(iconX);

    // Text Info 
    let textInfo = document.createElement("div");
    textInfo.className = "text-center";

    // Image
    let image = document.createElement("img");
    image.src = current_image.src;
    textInfo.appendChild(image);

    // Name File
    let nameFile = document.createElement("div");
    nameFile.className = "mt-10";
    nameFile.appendChild(document.createTextNode(fileName.value));
    textInfo.appendChild(nameFile);
    divFile.appendChild(textInfo);

    // User Name
    let nameUser = document.createElement("div");
    nameUser.className = "name c-grey fs-14";
    nameUser.appendChild(document.createTextNode(userName.value));
    divFile.appendChild(nameUser);

    // Info Div
    let info = document.createElement("div");
    info.className = "info between-flex pt-10 mt-10 c-grey";
    divFile.appendChild(info);

    // Date
    let date = document.createElement("span");
    let dateNow = new Date();
    let dayNow = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`; // Example 20/5/2024
    date.appendChild(document.createTextNode(dayNow));
    info.appendChild(date);

    let size = document.createElement("span");
    fetch(current_image.src)
    .then(response => response.blob())
    .then(blob => {
        let sizeBytes = blob.size;
        let sizeMegaBytes = sizeBytes / (1024 * 1024);
        size.appendChild(document.createTextNode(`${sizeMegaBytes.toFixed(2)} MB`));
        info.appendChild(size);

        // إضافة العنصر بعد استلام حجم الملف
        fileContent.appendChild(divFile);
        localStorage.setItem("div-file", fileContent.innerHTML);

        // إعادة تعيين مستمع الحدث لزر الإزالة
        setRemoveListener(iconX);
    })
    .catch(error => {
        console.log(`Error With Image ${error}`);
    });

    uploadPupop.classList.remove("show-pupop");
    inputs.forEach((input) => {
        input.value = "";
    });
};

function setRemoveListener(el) {
    el.addEventListener("click", () => {
        el.parentElement.remove();
        localStorage.setItem("div-file", fileContent.innerHTML);
    });
}


window.addEventListener("DOMContentLoaded", () => {
    const savedDivFile = localStorage.getItem("div-file");
    if (savedDivFile) {
        fileContent.innerHTML = savedDivFile;

        const removeButtons = document.querySelectorAll(".remove");
        removeButtons.forEach(button => {
            setRemoveListener(button);
        });
    }
});

