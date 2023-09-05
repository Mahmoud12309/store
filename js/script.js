let shop = document.querySelectorAll(".butons"),
input = document.querySelector(".dis"),
num = 100,
contant = document.querySelector(".contant"),
contanp = document.querySelector(".contant p"),
x = document.querySelector(".X"),
sha = document.querySelector(".sha");

shop.forEach((s, index) => {
    s.onclick = () => {
        let card = document.querySelectorAll(".card");
        let img = card[index].querySelector("img");
        window.location.href = `https://wa.me/+201010252321/?text=${img.getAttribute("data-name")}`;
    };
});

function setTime() {
    contant.classList.add("active");
    let set = setInterval(() => {
        num--;
        sha.style.width = num + "%";
        if (num === 0) {
            clearInterval(set);
            num = 100;
        }
    }, 30);
    setTimeout(() => {
        contant.classList.remove("active");
    }, 3000);
}

function clickD(e){
    if(input.value === "D1OaA"){
        contanp.textContent = "! تمت العملية بنجاح ";
        setTime();
    }else{
        contanp.textContent = "حدث خطاء اعد المحاولة لاحقا";
        setTime();
    }
}
