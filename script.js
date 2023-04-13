const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");
const triangle = document.getElementById("triangle");

hamburger.addEventListener('click', () => {
    links.classList.toggle("show");
    triangle.classList.toggle("show");
    console.log("I am shown!");
});