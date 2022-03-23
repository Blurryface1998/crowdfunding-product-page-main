let modal = document.getElementById("modal")
let btn = document.getElementById("modalMenu");
let span = document.getElementsByClassName("close")[0];

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