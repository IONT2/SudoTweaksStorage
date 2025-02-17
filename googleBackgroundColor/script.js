document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement("div");
    message.innerText = "Hello from Sudo Tweaks!";
    message.style.position = "absolute";
    message.style.top = "10px";
    message.style.left = "10px";
    message.style.background = "black";
    message.style.color = "white";
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    document.body.appendChild(message);
});
