const container= document.querySelector(".main");
const content = document.createElement("dev");

content.classList.add("daari");
content.textContent="hami daari gnag ho";
container.appendChild(content);

const image =document.createElement("img")
image.src = "imageee.png";
container.appendChild(image);



const link = document.createElement("a");
link.classList.add("linkToGoogle");
link.textContent="Google";
link.href = "https://www.google.com";
container.appendChild(link);

