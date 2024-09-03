let linkElements = Array.from(document.querySelectorAll(".sidebar > ul li"));
let divElements = Array.from(document.querySelectorAll(".content-of-sidebar > div"));

// Function to show content based on clicked link
function showContent(element) {
    linkElements.forEach((link) => {
        link.classList.remove("active");
    });
    element.classList.add("active");
    let titleNow = element.dataset.title;
    document.title = titleNow;
    divElements.forEach((div) => {
        div.style.display = "none";
    });
    document.querySelector(element.dataset.content).style.display = "block";
}
// Event listeners for sidebar links
linkElements.forEach((event) => {
    event.addEventListener("click", () => {
        showContent(event);
        localStorage.setItem("activeLink", event.dataset.title.toLowerCase());
    });
});


let linkToProfile = document.querySelector(".visit");
let profileContent = document.querySelector(".profile-link");

// Function to show profile content
export function showProfileContent() {
    linkElements.forEach((link) => {
        link.classList.remove("active");
    });
    profileContent.classList.add("active");
    divElements.forEach((cont) => {
        cont.style.display = "none";
    });
    divElements[2].style.display = "block";
    let title = profileContent.dataset.title; 
    document.title = title;
}
// Event listener for profile link
linkToProfile.addEventListener("click", () => {
    showProfileContent();
    localStorage.setItem("activeLink", "profile")
});



// On page load, check for active link in local storage and show content accordingly
document.addEventListener("DOMContentLoaded", () => {
    let activeLink = localStorage.getItem("activeLink");
    if (activeLink){
        if (activeLink === "profile"){
            showProfileContent()
        } else{
            let activeElement = linkElements.find((element) => element.dataset.title.toLowerCase() === activeLink);
            if (activeElement){
                showContent(activeElement)
            }
        }
    }
})

// Set Function Fill On The Elements Spans
let fatherEl = document.querySelector(".targets");
let widthGoal = document.querySelectorAll(".width-goal");
let nums = document.querySelectorAll(".width-goal > span");


// Function Scroll Y On The Elements Spans
window.onscroll = () => {
    if (window.scrollY >= fatherEl.offsetTop){
        widthGoal.forEach((goal) => {
            goal.style.width = goal.dataset.width;
        });
        nums.forEach((num) => {
            num.textContent = num.dataset.nums;
            if (num.dataset.nums === num.dataset.nums){
                num.style.display = "block";
            }
        });
    }
}

// Set Function Delete Tasks
let deleteTask = document.querySelectorAll(".delete");
let restbutton = document.getElementById("rest-btn");
let task = document.querySelectorAll(".latest-tasks > .task-row");

// Add Class Done To Elements Task
deleteTask.forEach((e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.add("done");
    });
});

// Button Rest Class Done To Elements Task
restbutton.addEventListener("click", (e) => {
    task.forEach((taks) => {
        taks.classList.remove("done");
    })
})

// Mange Button Courses 
let buttonCourse = document.querySelectorAll(".courses .courses-page .course .title");
let divsCourses = document.querySelectorAll(".courses .courses-page-cards > div");
let coursesEl = document.querySelectorAll(".courses .courses-page .course"); 
let backbutton = document.querySelector(".courses .courses-page-cards .back-button");

// All Course Info Style It None
divsCourses.forEach((el) => {
    el.style.display = "none";
})

// Function Work At Click Button Course
function clickToBtnCourse(course){
    // At click Button Show Course
    coursesEl.forEach((ele) => {
        ele.style.display = "none";
    });
    // console.log(document.querySelector(course.dataset.course)); // Test Code At Run
    document.querySelector(course.dataset.course).style.display = "block";
}
// Function Work At Clikc Back Button
function backButton(){
    divsCourses.forEach((ele) => {
        ele.style.display = "none";
    })
    coursesEl.forEach((el) => {
        el.style.display = "block";
    });
}

// Work Function "backButton"
backbutton.addEventListener("click", (event) => {
    backButton(event)
})


// Work Function "clickToBtnCourse"
buttonCourse.forEach((event) => {
    event.addEventListener("click", () => {
        clickToBtnCourse(event);
    })
})



let btnProfile = Array.from(document.querySelectorAll(".btn-profile"));

// btnProfile.forEach((click) => {
//     click.addEventListener("click", () => {
//         linkElements.forEach((link) => {
//             link.classList.remove("active");
//         })
//     })
// })



// export function showProfileContent() {
//     linkElements.forEach((link) => {
//         link.classList.remove("active");
//     });
//     profileContent.classList.add("active");
//     divElements.forEach((cont) => {
//         cont.style.display = "none";
//     });
//     divElements[2].style.display = "block";
//     let title = profileContent.dataset.title; 
//     document.title = title;
// }