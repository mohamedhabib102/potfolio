let elFillProg = document.querySelectorAll(".el-color-fill");

// Mange Color Progres
elFillProg.forEach((color) => {
    let currentColor = parseInt(color.dataset.color);
    
    // 5% to 35%: red;
    if (currentColor >= 5 && currentColor < 35){
        color.style.width = `${currentColor}%`;
        color.classList.add("color-red");
    } 
    // 35% to 70%: orange
    else if (currentColor >= 35 && currentColor < 70){
        color.style.width = `${currentColor}%`;
        color.classList.add("color-orange");
    }
    // 70% to 100%: blue
    else if (currentColor >= 70 && currentColor <= 100){
        color.style.width = `${currentColor}%`;
        color.classList.add("color-blue");
    }
});



