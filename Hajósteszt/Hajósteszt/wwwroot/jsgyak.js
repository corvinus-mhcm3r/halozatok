window.onload = function()
{
    console.log("start")
    let hova = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor")
        hova.appendChild(sor);

        for (var o = 0; o < s; o++) {
            let szám = document.createElement("div");
            szám.innerText = (s) * (o)
            sor.appendChild(szám);
        }
    }
}

