let modal = document.getElementById("modal")
let btn = document.getElementById("modalMenu");
let span = document.getElementsByClassName("close")[0];
let modalB = document.querySelector(".main__top--modal");
let btnOpenModal = document.getElementById("buttonModal");
let btnClose = document.getElementsByClassName("iconClose")[0];
let enterPledge = document.querySelectorAll(".enterPledge");
const body = document.querySelector("body");
const radio = document.getElementsByClassName("radioTest");
const parts = document.querySelectorAll(".parts");
const continueBtn = document.querySelectorAll(".btnContinue");
const gotIt = document.getElementById("btn");
const modalStart = document.querySelector(".main__support");
const bookmark = document.getElementById("bookmark");
const demo = document.getElementById("demo");

// Modal menu for Nav
btn.onclick = function() {
    modal.style.display = "block";
    btn.style.display = "none";
};

span.onclick = function() {
    modal.style.display = "none";
    btn.style.display = "block";
};

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
        btn.style.display = "block";

    } else if(event.target == modalB) {
        modalB.style.display = "none";
        body.style.overflow = "auto";

    } else if(event.target == modalStart) {
        modalStart.style.display = "none";
        body.style.overflow = "auto";
    } 
};

// Modal menu for Becker
btnOpenModal.addEventListener("click", function() {
    modalB.style.display = "block";
    body.style.overflow = "hidden";
});

btnClose.addEventListener("click", function() {
    modalB.style.display = "none";
    body.style.overflow = "auto";
});

window.addEventListener("click", function(event) {
    if(event.target == modalB) {
        modalB.style.display = "none";
        body.style.overflow = "auto";
    } 
});



// For Toggling Radio button to change border style and show Enter Pledge div
function toggle(element) {
    for(let a = 0; a < radio.length; a++) {
        radio[a].addEventListener("click", function(d) {
            for(let i = 0; i < element.length; i++) {
                element[i].addEventListener("change", function(e) {
                    let x = this;
                    for (let j = 0; j < element.length; j++) {
                        if(x != element[j]) {
                            element[j].classList.remove("active");
                        } else if(x.classList.contains("active") === false) {
                            x.classList.add("active");
                        } 
                        
                    }
                    e.preventDefault();
                    
                for(let f = 0; f < enterPledge.length; f++) {
                if(x != element[f]) {
                    enterPledge[f].classList.remove("display");
                } else if(x.classList.contains("active") === true) {
                    enterPledge[f].classList.add("display");
                }
            }
                });
            }
        });
    }
}
toggle(document.querySelectorAll(".parts"));

// Modal for Start pledge
gotIt.onclick = function() {
    modalStart.style.display = "none";
    body.style.overflow = "auto";
};

for(let i = 0; i < continueBtn.length; i++) {
    continueBtn[i].addEventListener("click", function() {
        modalStart.style.display = "block";
        modalB.style.display = "none";
        body.style.overflow = "none";
    });
}

// Bokmark change on click
bookmark.onclick =  function() {
   demo.classList.add("function");

  
};