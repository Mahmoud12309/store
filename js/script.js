let shop = document.querySelectorAll(".butons");

shop.forEach((s, index) => {
    s.onclick = () => {
        let card = document.querySelectorAll(".card");
        let img = card[index].querySelector("img");
        window.location.href = `https://wa.me/+201010252321/?text=${img.getAttribute("data-name")}`;
    };
});
