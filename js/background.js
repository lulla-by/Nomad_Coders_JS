const images = ["0.jpg", "1.jpg", "2.jpg"];
const choosenImage = images[Math.floor(Math.random() * images.length)]


const image = document.createElement("img")

image.src = `img/${choosenImage}`

document.body.appendChild(image)