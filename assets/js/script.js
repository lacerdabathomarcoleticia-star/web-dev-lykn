


alert("Esta é uma página de fãs dedicada ao LYKN, criada por fãs e sem vínculo oficial com o grupo ou sua empresa.");


const coracao = document.querySelector(".heart-path");

coracao.addEventListener("animationend", function(event) {

    if (event.animationName !== "drawHeart") return;

    setTimeout(() => {

        const abertura = document.querySelector(".like-intro");
        const proximaSecao = abertura.nextElementSibling;

        if (proximaSecao) {
            proximaSecao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }, 1);

}, { once: true });