let shop = document.querySelectorAll(".buton");
shop.forEach((s) => {
    s.onclick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=+201010252321";
    };
});
