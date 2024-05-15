function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }
}