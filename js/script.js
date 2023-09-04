let shop = document.querySelectorAll(".butons");
shop.forEach((s) => {
    s.onclick = () => {
        let card = document.querySelectorAll(".card");
        card.forEach((c) => {
            let img = c.querySelector("img");
            window.location.href =`https://wa.me/+201010252321/?text=${img.getAttribute("date-name")}`;
        });
    };
});
