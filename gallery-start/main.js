const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let filenames = new Array()
for (let i=1; i<6; i++) {
    filenames.push(`pic${i}.jpg`)
}
console.log(filenames)

/* Declaring the alternative text for each image file */
let altTexts = {
    "pic1.jpg": "A blue eye",
    "pic2.jpg": "A brown shell-like pattern",
    "pic3.jpg": "Flowers",
    "pic4.jpg": "Hyroglyphs of human figures",
    "pic5.jpg": "A moth sitting on a green leaf",    
}

/* Looping through images */
for (let fn of filenames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/" + fn);
    newImage.setAttribute('alt', altTexts[fn]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (ev) => {updateImageTo(fn)})
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (ev) => {
    if (btn.textContent == "Darken") {
        overlay.style.backgroundColor = "rgba(150,150,150,0.6)"
        btn.textContent = "Lighten"
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        btn.textContent = "Darken"
    }
})

function updateImageTo(file) {
    displayedImage.setAttribute("src", "./images/" + file)
    displayedImage.setAttribute("alt", altTexts[file])
}