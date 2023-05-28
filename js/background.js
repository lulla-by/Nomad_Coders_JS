const images = [ "1.jpg", "2.jpg"];
const choosenImage = images[Math.floor(Math.random() * images.length)]

const container =document.querySelector(".inner-container:last-child")

const body = document.querySelector("#body")
const image = document.createElement("img")

image.src = `img/${choosenImage}`
image.className ="background_img"

// container.appendChild(image)
document.body.style.backgroundImage=`url(img/${choosenImage})`