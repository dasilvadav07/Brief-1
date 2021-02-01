var list = document.querySelectorAll(".block__title");
var i = 0;
for (i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    })
}

var btn = document.querySelector("button");

btn.addEventListener("click", function postMessage() {
    var apprenant = ["David", "Muhammad", "Fodie", "Alicia", "Asad", "Caroline", "Denis", "Elyesse", "Gaelle", "Maelys", "Farima", "Abdoulaye", "Adil", "Alexis", "Ayoub", "Bamba", "Charles", "Flora", "Jules", "Kevin", "Lobna", "Jonathan", "Lyes", "Mohamed", "Nasser"];
    var random = apprenant[Math.floor(Math.random() * apprenant.length)]
    btn.textContent = random;
})