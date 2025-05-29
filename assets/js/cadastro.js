document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user")) || { name: "Fulano" };
    document.querySelector(".content h1").textContent = `Olá, ${user.name}!`;
});
