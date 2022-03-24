let modal = document.getElementById("modal")
let btn = document.getElementById("modalMenu");
let span = document.getElementsByClassName("close")[0];
let modalB = document.querySelector(".main__top--modal");
let btnOpenModal = document.getElementById("buttonModal");
let btnClose = document.getElementsByClassName("iconClose")[0];
let enterPledge = document.getElementsByClassName("enterPledge");
const body = document.querySelector("body");
const radioBtn = document.querySelector("#radio");


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
    }
};


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


function toggle(element) {
    for(let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function(e) {
            let x = this;
            for (let j = 0; j < element.length; j++) {
                if(x != element[j]) {
                    element[j].classList.remove("active");
                
                } else if(x.classList.contains("active") === true) {
                    x.classList.remove("active");
                } else {
                    x.classList.add("active");
                }
            }
            e.preventDefault();
        });
    }
}
toggle(document.querySelectorAll(".parts"));
