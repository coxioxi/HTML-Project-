function Image(url, alt, description) {
    this.URL = url;
    this.attributeValue = alt;
    this.description = description;
}

let pic1 = new Image("morning.jpg", "Morning", "A beautiful morning view with the sun rising over the mountains.");
let pic2 = new Image("noon.jpg", "Noon", "A bright noon scene with the sun high in the sky and clear blue skies.");
let pic3 = new Image("evening.jpg", "Evening", "A serene evening with the sun setting and casting a golden glow over the landscape.");
let pic4 = new Image("night.jpg", "Night", "A tranquil night scene with a starry sky and the moon shining brightly.");
let images = [pic1, pic2, pic3, pic4];

function changeImage() {
    var body = document.body.before;
    body.style.backgroundImage = "url('" + images[0].URL + "')";
}

window.onload = function() {
    changeImage();
}