let mediaContainer, messageText;

document.addEventListener("DOMContentLoaded", () => {
    messageText = document.getElementById("message-text");
    mediaContainer = document.getElementById("media-container");
})

function sendMessage() {
    let mediaElement = document.createElement("div");
    mediaElement.classList.add("media-element");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img");

    let img = document.createElement("img");
    img.classList.add("avatar");
    img.setAttribute("src", "..\\images\\basic-shape-avatar-1632968.jpg")

    let p = document.createElement("p");
    p.innerHTML = messageText.value;

    let footer = document.createElement("footer")
    footer.innerHTML = "The footer is here.";
    
    mediaContainer.insertBefore(mediaElement, mediaContainer.firstChild);
    mediaElement.appendChild(imgDiv);
    mediaElement.appendChild(p);
    mediaElement.appendChild(footer);
    imgDiv.appendChild(img);
}