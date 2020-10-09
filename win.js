window.onload = function() {
    document.body.style.backgroundImage = "url('pasture.jpg')";
    document.getElementById("title").style.color = "green";
    document.getElementById("return").onclick = function() {
        window.location.href = "main.html";
    }
}