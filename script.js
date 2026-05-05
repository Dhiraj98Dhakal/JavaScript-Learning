const container= document.querySelector(".main");

const heading = document.createElement("div");
heading.classList.add("heading");
heading.textContent="Heading";
container.appendChild(heading);

const nav = document.createElement("div");
nav.classList.add("navigation");
nav.textContent="Navigation";
container.appendChild(nav);


// const contents=document.querySelector(".contents");

const contents = document.createElement("div")
contents.classList.add("contents");
container.appendChild(contents);


const content1 = document.createElement("div");
content1.classList.add("content1");
content1.textContent="Content One";
contents.appendChild(content1)


const content2 = document.createElement("div");
content2.classList.add("content2");
// content2.textContent="Content two";
contents.appendChild(content2)

const OneTwo= document.createElement("div");
    OneTwo.classList.add("OneTwo");
    content2.appendChild(OneTwo);

    const One= document.createElement("div");
    One.classList.add("One");
    One.textContent="One iteam";
    OneTwo.appendChild(One);

    const Two= document.createElement("div");
    Two.classList.add("Two");
    Two.textContent="Two iteam";
    OneTwo.appendChild(Two);


    const ThreeFour= document.createElement("div");
    ThreeFour.classList.add("ThreeFour");
    content2.appendChild(ThreeFour);

    const Three= document.createElement("div");
    Three.classList.add("Three");
    Three.textContent="Three iteam";
    ThreeFour.appendChild(Three);

    const Four= document.createElement("div");
    Four.classList.add("Four");
    Four.textContent="Four iteam";
    ThreeFour.appendChild(Four);


const content3 = document.createElement("div");
content3.classList.add("content3");
content3.textContent="Content three";
contents.appendChild(content3)


const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent="Footer";
container.appendChild(footer);




// const image =document.createElement("img")
// // image.src = "imageee.png";
// container.appendChild(image);
// const link = document.createElement("a");
// link.classList.add("linkToGoogle");
// link.textContent="Google";
// link.href = "https://www.google.com";
// container.appendChild(link);

