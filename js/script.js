let shop = document.querySelectorAll(".butons");
shop.forEach((s) => {
    s.onclick = () => {
        // احصل على البطاقة المرتبطة بالزر الذي تم النقر عليه
        let card = s.closest(".card");
        if (card) {
            let img = card.querySelector("img");
            window.location.href = `https://wa.me/+201010252321/?text=${img.getAttribute("data-name")}`;
        }
    };
});
