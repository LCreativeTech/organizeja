document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const senha = e.target[1].value;
